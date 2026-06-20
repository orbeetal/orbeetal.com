"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Upload, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FieldLabel } from "@/components/ui/field-label";
import { FieldError } from "@/components/ui/field-error";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ruetDepartments } from "@/data/universities/ruet.js";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const schema = z.object({
  university:      z.string().min(1, "Select a university"),
  department_code: z.string().min(1, "Select a department"),
  roll_number:     z.string().min(1, "Roll number is required").max(50),
  name:            z.string().min(2, "Name is required").max(255),
  phone:           z.string().min(6, "Phone number is required").max(20),
  note:            z.string().max(2000).optional(),
  cv: z
    .any()
    .refine((files) => files?.length > 0, "CV file is required")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "File must be under 5MB")
    .refine((files) => files?.[0]?.type === "application/pdf", "Only PDF files are allowed"),
});

const UNIVERSITIES = [
  { value: "ruet", label: "Rajshahi University of Engineering & Technology (RUET)" },
];

const UNIVERSITY_DEPARTMENTS = {
  ruet: ruetDepartments,
};

const NOTE_SUGGESTIONS = [
  "Full Stack Development",
  "Android Development",
  "UI/UX Design",
  "Digital Marketing",
  "Graphic Design",
  "Data Science",
  "Cybersecurity",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export function CvSubmitForm() {
  const { toast } = useToast();
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const noteValue = watch("note") || "";

  function appendSuggestion(suggestion) {
    const current = noteValue.trim();
    const next = current ? `${current}, ${suggestion}` : `I am interested in ${suggestion}`;
    setValue("note", next, { shouldValidate: true });
  }

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("university", data.university);
    formData.append("department_code", data.department_code);
    formData.append("roll_number", data.roll_number);
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("cv", data.cv[0]);
    if (data.note) formData.append("note", data.note);

    try {
      const res = await fetch("/api/cv-submit", { method: "POST", body: formData });
      const json = await res.json();

      if (res.ok) {
        setSubmitted(true);
        toast({ title: "CV Submitted!", description: "We'll review your CV and get back to you." });
      } else {
        const firstError =
          json.errors ? Object.values(json.errors).flat()[0] : json.message;
        toast({ title: "Submission Failed", description: firstError || "Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network Error", description: "Check your connection and try again.", variant: "destructive" });
    }
  }

  if (submitted) {
    return (
      <div id="cv-form" className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">CV Submitted Successfully!</h3>
        <p className="text-foreground/60 max-w-sm">
          Thank you! We will review your CV and reach out to you soon.
        </p>
      </div>
    );
  }

  return (
    <section id="cv-form" className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl">
        <motion.div {...fadeUp(0)} className="text-center mb-10">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Apply Now
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Submit Your CV</h2>
          <p className="text-foreground/50 mt-3 text-sm">
            Fill in the form below — only PDF files accepted, max 5MB.
          </p>
        </motion.div>

        <motion.form
          {...fadeUp(0.1)}
          onSubmit={handleSubmit(onSubmit)}
          className="glass-panel rounded-2xl p-6 md:p-8 space-y-5"
          noValidate
        >
          <div>
            <FieldLabel required>University</FieldLabel>
            <Select
              {...register("university")}
              onChange={(e) => {
                register("university").onChange(e);
                setSelectedUniversity(e.target.value);
                setValue("department_code", "");
              }}
            >
              <option value="">Select university</option>
              {UNIVERSITIES.map((u) => (
                <option key={u.value} value={u.value}>
                  {u.label}
                </option>
              ))}
            </Select>
            <FieldError message={errors.university?.message} />
          </div>

          <div>
            <FieldLabel required>Department</FieldLabel>
            <Select
              className={cn(!selectedUniversity && "opacity-50 cursor-not-allowed")}
              disabled={!selectedUniversity}
              {...register("department_code")}
            >
              <option value="">Select department</option>
              {(UNIVERSITY_DEPARTMENTS[selectedUniversity] || []).map((d) => (
                <option key={d.code} value={d.code}>
                  {d.shortName} — {d.name}
                </option>
              ))}
            </Select>
            <FieldError message={errors.department_code?.message} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <FieldLabel required>Roll Number</FieldLabel>
              <Input placeholder="e.g. 2003001" {...register("roll_number")} />
              <FieldError message={errors.roll_number?.message} />
            </div>
            <div>
              <FieldLabel required>Full Name</FieldLabel>
              <Input placeholder="Your full name" {...register("name")} />
              <FieldError message={errors.name?.message} />
            </div>
          </div>

          <div>
            <FieldLabel required>Phone Number</FieldLabel>
            <Input type="tel" placeholder="+880 1XXX XXXXXX" {...register("phone")} />
            <FieldError message={errors.phone?.message} />
          </div>

          <div>
            <FieldLabel required>CV File (PDF only, max 5MB)</FieldLabel>
            <label className="flex flex-col items-center justify-center gap-2 w-full rounded-lg border border-dashed border-white/20 bg-white/3 hover:bg-white/6 hover:border-primary/40 transition-colors py-6 cursor-pointer">
              <Upload className="w-6 h-6 text-foreground/40" />
              <span className="text-sm text-foreground/50">
                {fileName || "Click to upload your CV"}
              </span>
              <span className="text-xs text-foreground/30">PDF · max 5MB</span>
              <input
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                {...register("cv")}
                onChange={(e) => {
                  register("cv").onChange(e);
                  setFileName(e.target.files?.[0]?.name || "");
                }}
              />
            </label>
            <FieldError message={errors.cv?.message} />
          </div>

          <div>
            <FieldLabel>Note (optional)</FieldLabel>
            <Textarea
              className="h-24"
              placeholder="e.g. I am interested in Full Stack Development..."
              {...register("note")}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {NOTE_SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => appendSuggestion(s)}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/15 bg-white/5 hover:border-primary/50 hover:bg-primary/10 text-foreground/60 hover:text-foreground transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
            <FieldError message={errors.note?.message} />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base font-semibold mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Submit CV
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
