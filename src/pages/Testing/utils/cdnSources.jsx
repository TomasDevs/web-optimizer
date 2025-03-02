export const sources = [
  {
    name: "Lodash.js",
    cdnSources: [
      {
        provider: "cdnjs",
        url: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
      },
      {
        provider: "jsDelivr",
        url: "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js",
      },
    ],
    urlLocal: "/assets/libs/lodash.min.js",
  },
  {
    name: "Chart.js",
    cdnSources: [
      {
        provider: "jsDelivr",
        url: "https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js",
      },
      {
        provider: "cdnjs",
        url: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js",
      },
    ],
    urlLocal: "/assets/libs/chart.min.js",
  },
  {
    name: "TensorFlow.js",
    cdnSources: [
      {
        provider: "jsDelivr",
        url: "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.8.0/dist/tf.min.js",
      },
      {
        provider: "cdnjs",
        url: "https://cdnjs.cloudflare.com/ajax/libs/tensorflow/4.8.0/tf.min.js",
      },
    ],
    urlLocal: "/assets/libs/tf.min.js",
  },
  {
    name: "Babylon.js",
    cdnSources: [
      {
        provider: "jsDelivr",
        url: "https://cdn.jsdelivr.net/npm/babylonjs@6.21.1/babylon.min.js",
      },
      {
        provider: "cdnjs",
        url: "https://cdnjs.cloudflare.com/ajax/libs/babylonjs/6.21.1/babylon.min.js",
      },
    ],
    urlLocal: "/assets/libs/babylon.min.js",
  },
  {
    name: "Neexistující knihovna",
    cdnSources: [
      {
        provider: "test",
        url: "https://cdn.test/fake-library.min.js",
      },
    ],
    urlLocal: "/assets/libs/fake-library.min.js",
  },
];
