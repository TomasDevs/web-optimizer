import React from "react";

const ImageFormatList = () => {
  return (
    <ul className="image-format-list">
      <li>
        <code className="inline-code">JPG</code>: Ideální pro fotografie, díky
        dobré kompresi a kvalitě.
      </li>
      <li>
        <code className="inline-code">WebP</code>: Nabízí lepší kompresi a
        kvalitu než JPG, včetně podpory průhlednosti.
      </li>
      <li>
        <code className="inline-code">AVIF</code>: Nejmodernější formát s
        nejvyšší úrovní komprese a kvality.
      </li>
    </ul>
  );
};

export default ImageFormatList;
