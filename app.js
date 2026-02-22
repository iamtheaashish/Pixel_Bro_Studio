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
        h("div", { className: "logo-mark" }, "PB"),
        h("div", null, "Pixel Bro Design Studio")
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

const Hero = () =>
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
          "Designs that convert. Web apps that scale."
        ),
        h(
          "p",
          null,
          "People buy stories, not products. ~ Seth Godin"
        ),
        h(
          "div",
          { className: "cta-row" },
          h("a", { className: "btn primary", href: "#contact" }, "Start a project"),
          h("a", { className: "btn", href: "https://drive.google.com", target: "_blank", rel: "noreferrer" }, "Portfolio"),
          h("a", { className: "btn", href: "https://youtube.com", target: "_blank", rel: "noreferrer" }, "Testimonials"),

        )
      )
    )
  );

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
        "Focused services for B2B teams: design that converts and web apps that scale."
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
          { label: "Foreign clients", value: "18+" },
          { label: "Clients across India", value: "120+" },
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
        "What businesses say about working with Pixel Bro Design Studio."
      ),
      h(
        "div",
        { className: "card" },
        h(
          "p",
          null,
          "“Pixel Bro delivered our business website and sales visuals with speed and precision. Our lead quality improved within weeks.”"
        ),
        h("h4", null, "— Priya K., Growth Lead, LumenTech")
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
            contact: "iamtheaashish@gmail.com",
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
    h("div", { className: "container" }, `© ${new Date().getFullYear()} Pixel Bro Design Studio. All rights reserved.`)
  );

const App = () =>
  h(
    React.Fragment,
    null,
    h(Nav),
    h(Hero),
    h(Services),
    h(Work),
    h(Contact),
    h(Footer)
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));
