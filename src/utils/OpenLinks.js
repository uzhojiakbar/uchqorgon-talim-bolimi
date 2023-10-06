import BoshqarmaTuzilmas from "../Pages/BoshqarmaTuzilmasi";
import Leaders from "../Pages/Leaders";
import Missiya from "../Pages/Missiya";
import Yangiliklar from "../Pages/News";
import OAV from "../Pages/OAV";
import Rekvizitlar from "../Pages/Rekvizitlar";
import Support from "../Pages/Support";
import TahliliyMalumotlar from "../Pages/TahliliyMalumot";
import Terminlar from "../Pages/Terminal";

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
        element: <BoshqarmaTuzilmas />,
      },
      {
        id: 3,
        name: "Missiya, maqsad va vazifalar",
        path: {
          type: "local",
          path: "/page/mission",
        },
        element: <Missiya />,
      },
      {
        id: 4,
        name: "Rekvizitlar",
        path: {
          type: "local",
          path: "/page/requisities",
        },
        element: <Rekvizitlar />,
      },
      {
        id: 4,
        name: "Bog`lanish",
        path: {
          type: "local",
          path: "/static/contacts",
        },
        element: <Support />,
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
    child: [
      {
        id: 1,
        name: "Tahlily Malumotlar",
        path: {
          type: "local",
          path: "/page/education",
        },
        element: <TahliliyMalumotlar />,
      },
      {
        id: 2,
        name: "Ta'limga oid terminlar",
        path: {
          type: "local",
          path: "/page/education_",
        },
        element: <Terminlar />,
      },
      {
        id: 3,
        name: `"Barkamol avlod" Bolalar markazi`,
        path: {
          type: "web",
          path: "/page/mission",
          navigate: "https://bam.uzedu.uz/",
        },
      },
      {
        id: 4,
        name: "Hisobotlar",
        path: {
          type: "local",
          path: "/",
        },
      },
    ],
  },
  {
    id: 4,
    name: "Interaktiv xizmatlar",
    child: [
      {
        id: 1,
        name: "Elektron Kundalik",
        path: {
          type: "web",
          navigate: "https://login.emaktab.uz/",
        },
      },
      {
        id: 2,
        name: "1-sinfga qabul",
        path: {
          type: "web",
          navigate: "https://my.maktab.uz/",
        },
      },
      {
        id: 3,
        name: "Elektron Shahodatnoma",
        path: {
          type: "web",
          navigate: "https://login.emaktab.uz/",
        },
      },
      {
        id: 4,
        name: "Raqamli kutubxona",
        path: {
          type: "web",
          navigate: "https://kutubxona.maktab.uz/login",
        },
      },
      {
        id: 5,
        name: "Yagona elektron tizim",
        path: {
          type: "web",
          navigate: "https://erp.maktab.uz/user/login",
        },
      },
      {
        id: 6,
        name: "Malaka oshirish",
        path: {
          type: "web",
          navigate: "https://onlinedu.uz/",
        },
      },
    ],
  },
  {
    id: 5,
    name: "Axborot xizmati",
    child: [
      {
        id: 1,
        name: "Press-relizlar",
        path: {
          type: "local",
          path: "/news",
        },
        element: <Yangiliklar />,
      },
      {
        id: 2,
        name: "OAV biz haqimizda",
        path: {
          type: "local",
          path: "/page/massmedia",
        },
        element: <OAV />,
      },
      {
        id: 3,
        name: "Test",
        path: {
          type: "local",
          path: "/page/test",
        },
        element: <OAV />,
      },
      {
        id: 4,
        name: "Rekvizitlar",
        path: {
          type: "local",
          path: "/page/requisities",
        },
        element: <Rekvizitlar />,
      },
      {
        id: 4,
        name: "Bog`lanish",
        path: {
          type: "local",
          path: "/static/contacts",
        },
        element: <Support />,
      },
    ],
  },
  {
    id: 6,
    name: "Ochiq ma`lumotlar",
  },
];

export default OpenLinks;
