import { useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import "./Nav.css";

const Nav = () => {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const openMenuBtn = document.querySelector(".open-menu-btn");
    const closeMenuBtn = document.querySelector(".close-menu-btn");

    const toggleMenu = () => {
      menu.classList.toggle("open");
      menu.style.transition = "transform 0.5s ease";
    };

    const removeMenuStyle = () => {
      menu.removeAttribute("style");
    };

    const dropdownArrows = menu?.querySelectorAll(".dropdown > .i");
    dropdownArrows?.forEach((arrow) => {
      arrow.addEventListener("click", function () {
        this.closest(".dropdown").classList.toggle("active");
      });
    });

    openMenuBtn?.addEventListener("click", toggleMenu);
    closeMenuBtn?.addEventListener("click", toggleMenu);
    menu?.addEventListener("transitionend", removeMenuStyle);

    return () => {
      openMenuBtn?.removeEventListener("click", toggleMenu);
      closeMenuBtn?.removeEventListener("click", toggleMenu);
      menu?.removeEventListener("transitionend", removeMenuStyle);
      dropdownArrows?.forEach((arrow) => {
        arrow.removeEventListener("click", function () {
          this.closest(".dropdown").classList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <header className="header">
      <div className="logo ">
        <img
          className="w-[150px]"
          src="https://www.brilliantconsulting.io/assets/BCG_logo-DZ2BSbIh.png"
          alt="logo"
        />
      </div>
      <div className="menu ">
        <div className="head">
          {/* <div className="logo">
            <img
              className="w-[100px]"
              src="https://www.brilliantconsulting.io/assets/BCG_logo-DZ2BSbIh.png"
              alt="logo"
            />
          </div> */}
          <button type="button" className="close-menu-btn"></button>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className="dropdown">
            <a href="#">Start Your Business</a>
            <IoChevronDown className="i" />
            <ul className="sub-menu">
              <li className="dropdown">
                <a href="#">
                  <span>Business Registration</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-right">
                  <li>
                    <a href="#">
                      <span>Trade License</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Company Registration</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Income Tax</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Value Added Tax (BIN)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>ERC Registration</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>IRC Registration</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Audit & Secretarial Compliance</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-right">
                  <li>
                    <a href="#">
                      <span>Secretarial Compliance</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Financial Audit</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Project Profiling/Feasibility Report</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Risk Assessment</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Formulation of Strategic Approach</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Intellectual Property</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-right">
                  <li>
                    <a href="#">
                      <span>Trade Mark Registration</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Copyright Registration</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Patent Registration</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Income Tax Filing</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-right">
                  <li>
                    <a href="#">
                      <span>Income Tax Filing</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Company Return File</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Others Return File</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>VAT Filing</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-right">
                  <li>
                    <a href="#">
                      <span>Return File</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="#">
                  <span>Element</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-right">
                  
                  <li className="dropdown">
                    <a href="#">
                      <span>Element 3</span>
                    </a>
                    <IoChevronDown className="i" />
                    <ul className="sub-menu sub-menu-right">
                      <li>
                        <a href="#">
                          <span>Element 3.1</span>
                        </a>
                      </li>
                     
                    </ul>
                  </li>
                 
                </ul>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#">ENTREPRENEUR TYPE</a>
            <IoChevronDown className="i" />
            <ul className="sub-menu">
              <li className="dropdown">
                <a href="#">
                  <span>For Bangladeshi Entrepreneur</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-right">
                  <li>
                    <a href="#">
                      <span>Proprietorship</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Partnership</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Private Limited Company</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Public Limited Company</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>One Person Company</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Society/Trust/Foundation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Trade Organization</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>NGO</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Under Section 28 of Companies Act</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Under Section 29 of Companies Act</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="#">
                  <span>For Foreign Investor</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-right">
                  <li>
                    <a href="#">
                      <span>100% Foreign Company</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Joint Venture Company</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>FDI and NRB Business Services</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Liaison or Branch Office</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">VIRTUAL BRAIN</a>
            <IoChevronDown className="i" />
            <ul className="sub-menu">
              <li className="dropdown">
                <a href="#">
                  <span>Legal Support Service</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-left">
                  <li>
                    <a href="#">
                      <span>Drafting and Vetting of Legal Document</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Filing of Document</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Advocate on Call for Advisory</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Consultancy on Business Plan</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Succession Planning</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Shifting of Registered Office</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Due diligence for transfer of ownership</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Advisory for Litigation & Arbitration</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Web Content Service</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-left">
                  <li>
                    <a href="#">
                      <span>Domain</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Hosting</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Web Design</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Software Development</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Digital Marketing</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">PERSONAL DOCUMENT</a>
            <IoChevronDown className="i" />
            <ul className="sub-menu">
              <li className="dropdown">
                <a href="#">
                  <span>Employment Document</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-left">
                  <li>
                    <a href="#">
                      <span>Offer Letters</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Appointment Letters</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Resignation Letters</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>For Business Communication</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-left">
                  <li>
                    <a href="#">
                      <span>Sales Deed</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Lease Deed</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Power of Attorney</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Agreement to Sell</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Support Document</span>
                </a>
                <IoChevronDown className="i" />
                <ul className="sub-menu sub-menu-left">
                  <li>
                    <a href="#">
                      <span>Share Register</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Share Transfer</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Share Certificate</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Notice/Resolution Book</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Visiting Card</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Translate Service</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">APPOINTMENT</a>
          </li>
          <li>
            <a href="#">E-LIBRARY</a>
          </li>
        </ul>
      </div>
      <div className="flex lg:hidden header-right ">
        <button type="button" className="open-menu-btn">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>
    </header>
  );
};

export default Nav;
