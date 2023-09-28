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
          path: "/leders/index",
        },
        element: <Leaders />,
      },
      {
        id: 2,
        name: "Boshqarma tuzilmasi",
        path: {
          type: "local",
          path: "/page/structure",
        },
      },
      {
        id: 3,
        name: "Missiya, maqsad va vazifalar",
        path: {
          type: "local",
          path: "/page/mission",
        },
      },
      {
        id: 4,
        name: "Rekvizitlar",
        path: {
          type: "local",
          path: "/page/requisities",
        },
      },
      {
        id: 4,
        name: "Bog`lanish",
        path: {
          type: "local",
          path: "/static/contacts",
        },
      },
    ],
  },
  // NO child
  {
    id: 2,
    name: "Hujjatlar",
    path: "/hujjatlar",
  },
  // NO child
  {
    id: 3,
    name: "Ta`lim",
  },
  {
    id: 4,
    name: "Interaktiv xizmatlar",
  },
  {
    id: 5,
    name: "Axborot xizmati",
  },
  {
    id: 6,
    name: "Ochiq ma`lumotlar",
  },
];

export default OpenLinks;
