import * as React from "react";

interface EmailTemplateProps {
  name: string;
  content: string;
  phone: string | null;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, phone, content
}) => (
  <div>
    <h1 className="font-mono font-bold">Hello, I am {name}!</h1><br />
    <h3><p className="font-mono font-medium">{content}</p></h3><br />
       { phone && <h2>Phone Number: <p className="font-semibold">{phone}</p></h2>}
  </div>
);
