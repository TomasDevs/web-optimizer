import React, { useState, useEffect } from "react";

const DynamicAd = ({ isOptimized }) => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (!isOptimized) {
      // Simulace opožděného načtení reklamy po 1,5 sekundě
      const timer = setTimeout(() => {
        setAdLoaded(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOptimized]);

  return (
    <div className="ad-placeholder">
      {isOptimized ? (
        <div
          style={{
            width: "100%",
            height: "800px",
            background: "#f0f0f0",
            border: "1px solid #ccc",
            padding: "20px",
          }}>
          <div>Rezervované místo pro reklamu</div>
          <iframe
            src="https://osel.cz/"
            width="100%"
            height="700"
            title="Ukázková reklama"
            style={{ border: "none", marginTop: "20px" }}
            loading="lazy"
          />
        </div>
      ) : (
        <>
          <div className="content-before-ad">
            <p>
              Tento text je nad reklamou. Při načtení reklamy dojde k posunu
              obsahu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </div>

          {adLoaded && (
            <div
              className="ad-container__content ad-container__content--dynamic"
              style={{
                height: "800px",
                marginBottom: "30px",
                marginTop: "30px",
                background: "#e0e0e0",
                border: "1px solid #999",
                padding: "20px",
                textAlign: "center",
              }}>
              <strong style={{ fontSize: "1.5rem" }}>
                VELKÝ REKLAMNÍ BANNER
              </strong>
              <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                Tento banner se načetl až po vykreslení stránky a způsobil
                masivní posun obsahu
              </p>
              <iframe
                src="https://web-optimizer.netlify.app/"
                width="100%"
                height="600"
                title="Ukázková reklama"
                style={{ border: "none" }}
              />
            </div>
          )}

          <div className="content-after-ad">
            <p>
              Tento text je pod reklamou. Při načtení dojde k jeho posunu dolů.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default DynamicAd;
