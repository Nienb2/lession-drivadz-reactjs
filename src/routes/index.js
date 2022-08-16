import Home from "~/pages/Home";
import Chiendich from "~/pages/Chiendich";
import Quangcao from "~/pages/Quangcao";
import Tochuc from "~/pages/Tochuc";
import Chuxe from "~/pages/Chuxe";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/chiendich", component: Chiendich },
  { path: "/quangcao", component: Quangcao },
  { path: "/tochuc", component: Tochuc },
  { path: "/chuxe", component: Chuxe },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
