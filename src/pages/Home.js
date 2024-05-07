import React from "react";
import Navbar from "../layouts/Navbar";
import FooterSmall from "../layouts/FooterSmall";
import background from "../assets/img/register_bg_2.png";
import Sidebar from "../layouts/SideBar";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Navbar transparent />
      </div>
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Dashboard
                      </h6>
                    </div>
                    {/* Hier kannst du Elemente für dein Dashboard hinzufügen */}
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {/* Hier kannst du den Inhalt deines Dashboards hinzufügen */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
