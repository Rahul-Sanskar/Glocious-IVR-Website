"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FORM_ENDPOINT = "https://formsubmit.co/kazim@glocious.com";

const formFields = [
  { id: "name",  label: "Full Name",     type: "text",  pattern: undefined },
  { id: "email", label: "Email Address", type: "email", pattern: undefined },
  { id: "phone", label: "Phone Number",  type: "tel",   pattern: "[+]?[\\d\\s\\-]{7,15}" },
] as const;

type FieldId = (typeof formFields)[number]["id"];
type FormData = Record<FieldId, string>;
type FieldMap = Partial<Record<FieldId, string>>;
type TouchMap = Partial<Record<FieldId, boolean>>;

function validate(field: string, value: string): string {
  if (!value) return "This field is required";
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return "Please enter a valid email address";
  if (field === "phone" && !/^\+?[\d\s\-]{7,15}$/.test(value))
    return "Please enter a valid phone number";
  return "";
}

/** Reusable IVR consultation form.
 *  Identical markup is used both in the Hero and in the #contact section / contact page.
 */
export function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "" });
  const [errors, setErrors]     = useState<FieldMap>({});
  const [touched, setTouched]   = useState<TouchMap>({});
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 5000);
    return () => clearTimeout(t);
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name as FieldId]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, formData[name as FieldId]) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({});
    setErrors({});

    const newErrors: FieldMap = {};
    formFields.forEach(({ id }) => { newErrors[id] = validate(id, formData[id]); });
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setLoading(true);
    setErrorMsg("");
    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      body.append("_subject", "New IVR Enquiry — Glocious Infotech");
      body.append("_replyto", formData.email);
      body.append("_captcha", "true");

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("Network error");

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "" });
      setTouched({});
      setErrors({});
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl w-full">
      <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-1">
        Get a Free IVR Consultation
      </h3>
      <p className="text-sm text-white/60 mb-6">
        Fill in your details and our team will get back to you within 24 hours.
      </p>

      {errorMsg && (
        <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 mb-4">
          {errorMsg}
        </p>
      )}
      {success && (
        <p className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3 mb-4">
          Thank you! Your enquiry has been received. Our team will contact you shortly.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {formFields.map(({ id, label, type, pattern }) => (
          <div key={id}>
            <label htmlFor={`cf-${id}`} className="block text-sm font-medium text-white/80 mb-1.5">
              {label}
            </label>
            <input
              id={`cf-${id}`}
              name={id}
              type={type}
              value={formData[id]}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              pattern={pattern}
              placeholder={`Enter your ${label.toLowerCase()}`}
              className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-sm"
            />
            {touched[id] && errors[id] && (
              <p className="text-xs text-red-400 mt-1.5">{errors[id]}</p>
            )}
          </div>
        ))}

        {/* Honeypot — hidden from real users */}
        <div className="hidden" aria-hidden="true">
          <input type="text" name="bot-field" tabIndex={-1} autoComplete="off"
            style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full mt-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-colors"
          disabled={loading}
        >
          {loading ? "Sending…" : "Request a Callback"}
        </Button>
      </form>
    </div>
  );
}
