import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit form");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    },
    onError: (error: Error) => {
      toast.error("Failed to send message", {
        description: error.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="first-name" className="text-slate-300">
            First name
          </Label>
          <Input
            id="first-name"
            placeholder="John"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
            className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name" className="text-slate-300">
            Last name
          </Label>
          <Input
            id="last-name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
            className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-300">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company" className="text-slate-300">
          Company (optional)
        </Label>
        <Input
          id="company"
          placeholder="Acme Inc."
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className="bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-300">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          className="min-h-[150px] bg-black/50 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={submitMutation.isPending}
        className="w-full h-14 text-base font-bold bg-white text-black hover:bg-primary hover:text-black transition-all"
      >
        {submitMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            SENDING...
          </>
        ) : (
          "SEND TRANSMISSION"
        )}
      </Button>
    </form>
  );
}
