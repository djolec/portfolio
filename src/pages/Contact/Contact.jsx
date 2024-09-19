import Header from "../../ui/Header";
import PageTransition from "../../ui/PageTransition";
import Socials from "../../ui/Socials";
import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";

const Contact = () => {
  return (
    <PageTransition>
      <Header textColor="text-white" />
      <div className="relative flex flex-col gap-12 overflow-hidden bg-[#1C1D20]">
        <ContactHeading />
        <ContactForm />
        <Socials />
      </div>
    </PageTransition>
  );
};

export default Contact;
