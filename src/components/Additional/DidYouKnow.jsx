import React from "react";
import AdditionalSection from "./AdditionalSection";
import FactList from "./FactList";

const DidYouKnow = () => {
  const facts = [
    {
      text: "Až 53 % uživatelů opustí stránku, pokud se načítá déle než 3 sekundy.",
    },
    {
      text: "Pravděpodobnost opuštění stránky vzroste o 32 %, pokud načítání trvá 3 sekundy místo 1.",
    },
    {
      text: "79 % zákazníků, kteří jsou nespokojeni s výkonem webu, zvažuje, že z něj znovu nenakoupí.",
    },
  ];

  return (
    <AdditionalSection title="Věděli jste, že..." className="-did-you-know">
      <FactList
        facts={facts}
        source={{
          url: "https://www.thinkwithgoogle.com/",
          text: "Studií Google",
        }}
      />
    </AdditionalSection>
  );
};

export default DidYouKnow;
