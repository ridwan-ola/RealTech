const services = {

    "web-development": {

        title: "Web Development",

        subtitle:
            "Modern websites designed to represent your business professionally.",

        description:
            "RealTech Solution creates responsive, modern and user-focused websites for businesses, organizations, professionals and personal brands. Every website is structured to work effectively across phones, tablets and computers.",

        hero:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=90",

        images: [

            "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85"

        ],

        services: [

            "Business websites",

            "Corporate websites",

            "Portfolio websites",

            "Landing pages",

            "Responsive mobile design",

            "Website redesign",

            "Website maintenance",

            "SEO-ready website structure"

        ]

    },


    "software-development": {

        title: "Software Development",

        subtitle:
            "Custom software designed around the way your business works.",

        description:
            "We develop practical software solutions that can help businesses organize operations, automate repetitive tasks, manage information and improve productivity.",

        hero:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=90",

        images: [

            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=85"

        ],

        services: [

            "Business applications",

            "Management systems",

            "Database-driven applications",

            "Automation software",

            "Custom internal tools",

            "System integration",

            "Software maintenance",

            "Application improvements"

        ]

    },


    "network-engineering": {

        title: "Network Engineering",

        subtitle:
            "Reliable network infrastructure for homes, offices and businesses.",

        description:
            "With extensive hands-on experience in networking, CCTV and internet installation, RealTech Solution provides network installation, configuration, troubleshooting and infrastructure support.",

        hero:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90",

        images: [

            "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?auto=format&fit=crop&w=1000&q=85"

        ],

        services: [

            "LAN installation",

            "Wi-Fi deployment",

            "Internet installation",

            "Network configuration",

            "Router and switch configuration",

            "Network troubleshooting",

            "CCTV installation",

            "Network maintenance"

        ]

    },


    "embedded-systems": {

        title: "Embedded Systems & Automation",

        subtitle:
            "Smart electronics and automation for practical applications.",

        description:
            "RealTech Solution works with embedded systems and automation concepts to create intelligent control solutions using electronics, microcontrollers, sensors and software.",

        hero:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=90",

        images: [

            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1597423244037-8a6f6c2a2b3d?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=85"

        ],

        services: [

            "Microcontroller projects",

            "Electronic control systems",

            "Sensor-based systems",

            "Automation projects",

            "IoT concepts",

            "Prototype development",

            "Embedded programming",

            "System troubleshooting"

        ]

    },


    "laptop-sales": {

        title: "Laptop Sales",

        subtitle:
            "Computing equipment matched to your actual needs.",

        description:
            "We help customers identify suitable laptops and computing equipment according to workload, performance requirements and budget.",

        hero:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=90",

        images: [

            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1000&q=85"

        ],

        services: [

            "Business laptops",

            "Student laptops",

            "Professional workstations",

            "Development laptops",

            "Used and refurbished systems",

            "Laptop upgrades",

            "SSD upgrades",

            "RAM upgrades"

        ]

    },


    "hardware-repair": {

        title: "Hardware Repair & Maintenance",

        subtitle:
            "Technical diagnosis, repair and preventive maintenance.",

        description:
            "With years of practical hardware experience, RealTech Solution provides computer diagnosis, repair, maintenance and hardware troubleshooting for a wide range of devices.",

        hero:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=90",

        images: [

            "https://images.unsplash.com/photo-1591238372338-22d30c883a86?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=85",

            "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=85"

        ],

        services: [

            "Laptop diagnosis",

            "Desktop computer repair",

            "Operating system installation",

            "Hardware troubleshooting",

            "RAM replacement",

            "Storage replacement",

            "Computer cleaning",

            "Preventive maintenance"

        ]

    }

};


function renderService() {

    const container =
        document.getElementById("servicePage");

    if (!container) return;

    const params =
        new URLSearchParams(window.location.search);

    const key =
        params.get("service") || "web-development";

    const service =
        services[key] || services["web-development"];


    document.title =
        `${service.title} | RealTech Solution`;


    container.innerHTML = `

        <section class="service-hero"
                 style="background-image:
                 url('${service.hero}')">

            <div class="service-hero-overlay"></div>

            <div class="container service-hero-content">

                <span class="eyebrow">
                    REALTECH SOLUTION
                </span>

                <h1>
                    ${service.title}
                </h1>

                <p>
                    ${service.subtitle}
                </p>

            </div>

        </section>


        <section class="section">

            <div class="container">

                <div class="service-intro">

                    <div>

                        <span class="eyebrow">
                            OUR SERVICE
                        </span>

                        <h2>
                            ${service.title}
                        </h2>

                    </div>

                    <p>
                        ${service.description}
                    </p>

                </div>


                <div class="service-details">

                    <div>

                        <h3>
                            What We Can Help With
                        </h3>

                        <div class="check-list">

                            ${service.services.map(item => `

                                <div class="check-item">

                                    <span>✓</span>

                                    <strong>
                                        ${item}
                                    </strong>

                                </div>

                            `).join("")}

                        </div>

                    </div>


                    <div class="service-gallery">

                        ${service.images.map(image => `

                            <img src="${image}"
                                 alt="${service.title}">

                        `).join("")}

                    </div>

                </div>

            </div>

        </section>


        <section class="cta-section">

            <div class="container cta-content">

                <div>

                    <span class="eyebrow">
                        NEED THIS SERVICE?
                    </span>

                    <h2>
                        Let's Discuss Your
                        <span>Requirement.</span>
                    </h2>

                    <p>
                        Contact RealTech Solution directly
                        and let's determine the right approach.
                    </p>

                </div>

                <a href="https://wa.me/2348120669403"
                   target="_blank"
                   class="btn btn-light">

                    Contact Us →

                </a>

            </div>

        </section>

    `;
}


document.addEventListener("DOMContentLoaded", () => {

    renderService();

    const year =
        document.getElementById("year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    const menuToggle =
        document.getElementById("menuToggle");

    const nav =
        document.getElementById("mainNav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }

  // =====================================
  // EMAILJS - CONTACT FORM SUBMISSION
  // =====================================

  if (typeof emailjs !== "undefined") {
    emailjs.init({
      publicKey: "uyitv0Sefzs209O0m"
    });

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
      contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = contactForm.querySelector(
          'button[type="submit"], input[type="submit"]'
        );

        const originalText = submitButton
          ? (submitButton.tagName === "INPUT"
              ? submitButton.value
              : submitButton.textContent)
          : "";

        if (submitButton) {
          submitButton.disabled = true;

          if (submitButton.tagName === "INPUT") {
            submitButton.value = "Sending...";
          } else {
            submitButton.textContent = "Sending...";
          }
        }

        try {
          await emailjs.sendForm(
            "service_u2dq54y",
            "template_a4zqb4s",
            contactForm
          );

          alert("Thank you! Your enquiry has been sent successfully.");
          contactForm.reset();

        } catch (error) {
          console.error("EmailJS submission failed:", error);

          alert(
            "Sorry, your message could not be sent. Please try again."
          );

        } finally {
          if (submitButton) {
            submitButton.disabled = false;

            if (submitButton.tagName === "INPUT") {
              submitButton.value = originalText;
            } else {
              submitButton.textContent = originalText;
            }
          }
        }
      });
    }
  } else {
    console.error("EmailJS library was not loaded.");
  }
});
