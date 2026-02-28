const h = React.createElement;

const Nav = () =>
  h(
    "nav",
    { className: "nav" },
    h(
      "div",
      { className: "container nav-inner" },
      h(
        "div",
        { className: "logo" },
        h("h2", { className: "logo-heading" }, "Pixel Bro Studio")
      ),
      h(
        "div",
        { className: "nav-links" },
        ["Home", "Services", "Featured", "Contact"].map((item) =>
          h("a", { key: item, href: `#${item.toLowerCase()}` }, item)
        )
      )
    )
  );

const Hero = ({ onStartProject }) =>
  h(
    "section",
    { className: "hero", id: "studio" },
    h(
      "div",
      { className: "container hero-grid" },
      h(
        "div",
        null,
        h("p", { className: "highlight" }, "Become imposible to ignore."),
        h(
          "h1",
          null,
          "Designs that convert.",
          h("br"),
          "Web apps that scale."
        ),
        h(
          "p",
          { className: "highlight" },
          "People buy stories, not products."
        ),
        h(
          "div",
          { className: "cta-row" },
          h(
            "button",
            { className: "btn primary", type: "button", onClick: onStartProject },
            "Start a project"
          ),
          h("a", { className: "btn", href: "https://drive.google.com", target: "_blank", rel: "noreferrer" }, "Portfolio"),
          h("a", { className: "btn", href: "https://youtube.com", target: "_blank", rel: "noreferrer" }, "Testimonials"),

        )
      )
    )
  );

const ContactFormModal = ({ isOpen, onClose, onSubmit }) =>
  isOpen
    ? h(
        "div",
        {
          className: "modal-overlay",
          onClick: (event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          },
        },
        h(
          "div",
          { className: "modal" },
          h(
            "div",
            { className: "modal-header" },
            h("h3", { className: "modal-title" }, "Start a project"),
            h(
              "button",
              { className: "modal-close", type: "button", onClick: onClose, "aria-label": "Close form" },
              "x"
            )
          ),
          h(
            "form",
            { className: "modal-form", onSubmit },
            h(
              "div",
              { className: "form-grid" },
              h(
                "label",
                { className: "form-field" },
                h("span", null, "Name"),
                h("input", { type: "text", name: "name", placeholder: "Your full name", required: true })
              ),
              h(
                "label",
                { className: "form-field" },
                h("span", null, "Email"),
                h("input", { type: "email", name: "email", placeholder: "you@email.com", required: true })
              ),
              h(
                "label",
                { className: "form-field" },
                h("span", null, "Phone number"),
                h("input", { type: "tel", name: "phone", placeholder: "+91 98765 43210" })
              ),
              h(
                "label",
                { className: "form-field" },
                h("span", null, "Business name"),
                h("input", { type: "text", name: "business", placeholder: "Your company" })
              ),
              h(
                "label",
                { className: "form-field full" },
                h("span", null, "Additional note"),
                h("textarea", { name: "note", rows: 4, placeholder: "Tell us about the project" })
              )
            ),
            h(
              "div",
              { className: "form-info" },
              h(
                "p",
                { className: "form-info-text" },
                "When you click 'Send inquiry', your email app or website will open with this form pre-filled. Review the details and send. That's all!"
              )
            ),
            h(
              "div",
              { className: "form-actions" },
              h("button", { className: "btn", type: "button", onClick: onClose }, "Cancel"),
              h("button", { className: "btn primary", type: "submit" }, "Send inquiry")
            )
          )
        )
      )
    : null;

const Services = () =>
  h(
    "section",
    { className: "section", id: "services" },
    h(
      "div",
      { className: "container" },
      h("h2", { className: "section-title" }, "Services"),
      h(
        "p",
        { className: "section-subtitle" },
        "Focused services for B2B teams:"
      ),
      h(
        "div",
        { className: "grid-3" },
        [
          {
            title: "Sales Graphic Design",
            copy: "Catalogs, one-pagers, pamphlets, and pitch decks designed to convert B2B buyers.",
          },
          {
            title: "Business Website Development",
            copy: "B2B business websites built for credibility, clarity, and lead generation.",
          },
          {
            title: "Sales Video Editing",
            copy: "B2B-focused video edits for testimonials, product walkthroughs, and sales narratives.",
          },
        ].map((item) =>
          h(
            "div",
            { className: "card", key: item.title },
            h("h4", null, item.title),
            h("p", null, item.copy)
          )
        )
      ),
      h(
        "div",
        { className: "stats" },
        [
          { label: "Creative sprints", value: "4-6 weeks" },
          { label: "Avg. client growth", value: "2.8x" },
          { label: "Foreign clients", value: "5+" },
          { label: "Clients across India", value: "20+" },
        ].map((stat) =>
          h(
            "div",
            { className: "stat", key: stat.label },
            h("span", null, stat.value),
            h("span", null, stat.label)
          )
        )
      )
    )
  );

const Work = () =>
  h(
    "section",
    { className: "section", id: "featured" },
    h(
      "div",
      { className: "container" },
      h("h2", { className: "section-title" }, "Featured Client Testimonial"),
      h(
        "p",
        { className: "section-subtitle" },
        "What businesses say about working with Bro Studio."
      ),
      h(
        "div",
        { className: "card" },
        h(
          "p",
          null,
          "“Pixel Bro delivered our business card and sales visuals with speed and precision. Our lead quality improved within weeks.”"
        ),
        h("h4", null, "— Aadi Jain, Owner, Shri Aadinath Paper Traders")
      )
    )
  );

const Contact = () =>
  h(
    "section",
    { className: "contact", id: "contact" },
    h(
      "div",
      { className: "container" },
      h(
        "div",
        { className: "contact-grid" },
        [
          {
            name: "Aashish Raj",
            role: "Lead Engineer",
            contact: "iamtheaashish@outlook.com",
          },
          {
            name: "Himanshu Sharma",
            role: "Lead Designer",
            contact: "himanshu.s8010@gmail.com",
          },
          {
            name: "Ritik Singhal",
            role: "Lead Designer",
            contact: "singhalritik640@gmail.com",
          },
        ].map((member) =>
          h(
            "div",
            { className: "contact-card", key: member.name },
            h("h4", null, member.name),
            h("p", null, member.role),
            h("p", null, member.contact)
          )
        )
      )
    )
  );

const Footer = () =>
  h(
    "footer",
    { className: "footer" },
    h("div", { className: "container" }, `© ${new Date().getFullYear()} Bro Studio. All rights reserved.`)
  );

const App = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone") || "N/A";
    const business = formData.get("business") || "N/A";
    const note = formData.get("note") || "N/A";

    const subject = `New project inquiry - ${business !== "N/A" ? business : name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Business: ${business}`,
      `Additional note: ${note}`,
    ].join("\n");

    const mailto = `mailto:pixelbrostudio@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    event.target.reset();
    setIsFormOpen(false);
  };

  return h(
    React.Fragment,
    null,
    h(Nav),
    h(Hero, { onStartProject: () => setIsFormOpen(true) }),
    h(Services),
    h(Work),
    h(Contact),
    h(Footer),
    h(ContactFormModal, {
      isOpen: isFormOpen,
      onClose: () => setIsFormOpen(false),
      onSubmit: handleFormSubmit,
    })
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));
