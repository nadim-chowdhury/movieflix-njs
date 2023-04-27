import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-20 text-center py-8">
      <div>
        <h2 className="text-3xl font-bold">Contact</h2>

        <div className="text-slate-700 text-xl font-semibold mt-4">
          <p>Dhaka, Bangladesh</p>
          <p>nadim-chowdhury@outlook.com</p>
          <p>+880 1971 258803</p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
