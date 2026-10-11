import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock implementation)
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl mb-4">
              <span className="relative inline-block">
                <span className="relative z-10">Get In Touch</span>
                {/* Hand-drawn arrow pointing to contact options */}
                <svg 
                  className="absolute -bottom-8 right-0 w-20 h-16 -rotate-12 hidden sm:block" 
                  viewBox="0 0 80 60" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 10C20 8 35 12 45 18C55 24 65 32 70 40M70 40L65 35M70 40L68 32" 
                    stroke="#e8a559" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h2>
            {/* Casual annotation */}
            <p className="text-sm text-gray-500 italic mt-2 relative">
              <span className="relative inline-block px-2 py-1">
                <span className="relative z-10">Let's collaborate!</span>
                <span className="absolute inset-0 bg-[#e8a559]/10 -rotate-1 rounded"></span>
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <a
            href="https://www.linkedin.com/in/sophia-ehlert/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#35612f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col w-64">
              <span className="text-gray-600">LinkedIn</span>
              <span className="text-sm text-gray-500">linkedin.com/in/sophia-ehlert</span>
            </div>
          </a>

          <a
            href="mailto:sophiaehlert@u.northwestern.edu"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#c86f4d] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col w-64">
              <span className="text-gray-600">Email</span>
              <span className="text-sm text-gray-500">sophiaehlert@u.northwestern.edu</span>
            </div>
          </a>

          <a
            href="https://github.com/sophiaehlert"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#6b8f71] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col w-64">
              <span className="text-gray-600">GitHub</span>
              <span className="text-sm text-gray-500">github.com/sophiaehlert</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
