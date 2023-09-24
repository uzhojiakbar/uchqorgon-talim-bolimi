import Leaders from "../Pages/Leaders";

const OpenLinks = [
  {
    id: 1,
    name: "Faoliyat",
    child: [
      {
        id: 1,
        name: "Rahbariyat",
        path: {
          type: "local",
          path: "leders/index",
        },
        element: <Leaders/>
      },
      {
        id: 2,
        name: "Boshqarma tuzilmasi",
        path: {
          type: "local",
          path: "page/structure",
        },
      },
      {
        id: 3,
        name: "Missiya, maqsad va vazifalar",
        path: {
          type: "local",
          path: "page/mission",
        },
      },
      {
        id: 4,
        name: "Rekvizitlar",
        path: {
          type: "local",
          path: "page/requisities",
        },
      },
      {
        id: 4,
        name: "Bog`lanish",
        path: {
          type: "local",
          path: "static/contacts",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Hujjatlar",
    path: "/hujjatlar",
  },
  {
    id: 3,
    name: "Ta`lim",
    child: [
      { id: 1, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 2, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 3, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 4, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
    ],
  },
  {
    id: 4,
    name: "Interaktiv xizmatlar",
    child: [
      { id: 1, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 2, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 3, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 4, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
    ],
  },
  {
    id: 5,
    name: "Axborot xizmati",
    child: [
      { id: 1, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 2, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 3, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 4, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
    ],
  },
  {
    id: 6,
    name: "Ochiq ma`lumotlar",
    child: [
      { id: 1, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 2, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 3, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
      { id: 4, name: "Rahbariyat", path: {
          type: "local",
          path: "leders/index",
        }, },
    ],
  },
];

export default OpenLinks;
