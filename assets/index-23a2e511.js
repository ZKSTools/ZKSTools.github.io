import { r, u as b, f as d, j as e } from "./index-b49ae7c1.js";
import "./save_excel-2074cee8.js";
import { a as k } from "./axios-e8041b7d.js";
import { b as p, M as v } from "./index-0296f535.js";
import { A as u, _ as l } from "./EditOutlined-ba8462b2.js";
import m from "./index-301d9557.js";
import w from "./index-6a405558.js";
import E from "./index-a85bc169.js";
import S from "./index-c2d3a2be.js";
import B from "./index-89b8a2bc.js";
import O from "./index-5f2516c4.js";
import { L as C } from "./index-b31aea46.js";
import "./index-c8e49e3a.js";
import "./index-a96b0043.js";
import "./index-02c67744.js";
var M = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z",
        },
      },
    ],
  },
  name: "github",
  theme: "outlined",
};
const T = M;
var x = function (o, i) {
  return r.createElement(u, l(l({}, o), {}, { ref: i, icon: T }));
};
x.displayName = "GithubOutlined";
const P = r.forwardRef(x);
var z = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z",
        },
      },
    ],
  },
  name: "twitter",
  theme: "outlined",
};
const G = z;
var f = function (o, i) {
  return r.createElement(u, l(l({}, o), {}, { ref: i, icon: G }));
};
f.displayName = "TwitterOutlined";
const I = r.forwardRef(f),
  y = async () => {
    try {
      const t = {
        method: "GET",
        url: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
      };
      return (await k.request(t)).data.USD;
    } catch (t) {
      return console.log(t), "/";
    }
  };
const H = () => {
    const [t, o] = r.useState(null);
    return (
      r.useEffect(() => {
        const i = async () => {
          const n = await y();
          o(n);
        };
        i();
        const c = setInterval(i, 1e4);
        return () => clearInterval(c);
      }, []),
      t === null
        ? e.jsx("div", { children: "Loading ETH Price..." })
        : e.jsxs("div", { children: ["ETH Price: $", t] })
    );
  },
  L = () => {
    const [t, o] = r.useState("/"),
      i = [
        { label: "zkSync", key: "zksync" },
        { label: "Stark", key: "stark" },
        { label: "LayerZero", key: "layer" },
        { label: "Mirror", key: "mirror" },
        { label: "Deposit", key: "deposit" },
        { label: "Coffee", key: "coffee" },
        {
          label: e.jsx("a", {
            href: "https://github.com/wxtsky/MyWalletScan",
            target: "_blank",
            rel: "noopener noreferrer",
            children: e.jsx(P, {}),
          }),
          key: "github",
        },
        {
          label: e.jsx("a", {
            href: "https://twitter.com/jingluo0",
            target: "_blank",
            rel: "noopener noreferrer",
            children: e.jsx(I, {}),
          }),
          key: "twitter",
        },
        { label: e.jsx(H, {}), key: "ethPrice" },
      ];
    r.useEffect(() => {
      const s = setInterval(() => {
        y().then((g) => {
          o(g);
        });
      }, 1e4);
      return () => {
        clearInterval(s);
      };
    }, []);
    const c = b(),
      n = d(),
      [a, h] = r.useState(n.pathname.replace("/", "") || "zksync"),
      j = (s) => {
        h(s.key);
      };
    return (
      r.useEffect(() => {
        n.pathname.replace("/", "") === "twitter" ||
          n.pathname.replace("/", "") === "github" ||
          h(n.pathname.replace("/", "") || "zksync");
      }, [n.pathname]),
      r.useEffect(() => {
        a === "twitter" || a === "github" || c(`/${a}`);
      }, [a]),
      e.jsx(p, {
        onClick: j,
        selectedKeys: [a],
        mode: "horizontal",
        style: { display: "flex", justifyContent: "center" },
        className: "custom-menu",
        children: i.map((s) => e.jsx(p.Item, { children: s.label }, s.key)),
      })
    );
  },
  $ = () => {
    const [t, o] = r.useState(!1);
    return (
      r.useEffect(() => {
        o(0);
      }, []),
      e.jsx("div", {
        children: e.jsxs(v, {
          title: "注意事项(2023-05-17)",
          open: t,
          onOk: () => o(!1),
          onCancel: () => o(!1),
          style: { fontFamily: "Arial, sans-serif", top: 20 },
          okText: "知道了",
          children: [
            e.jsx("h2", {
              style: { color: "#333", marginBottom: "15px" },
              children: "Hello,大家好，我是开发者北北",
            }),
            e.jsx("p", {
              style: { color: "#666", marginBottom: "10px" },
              children:
                "开发这款工具的初衷是为了方便大家查看自己的钱包信息，一直秉持着免费开源的原则，希望大家喜欢。",
            }),
            e.jsx("p", {
              style: { color: "#666", marginBottom: "10px" },
              children:
                "一开始我开发这款工具的时候，是放到自己的国内服务器上供大家使用的，但是，由于政策相关原因，我不得不将他迁移到Github静态页面上。",
            }),
            e.jsx("p", {
              style: { color: "#666", marginBottom: "10px" },
              children: "为什么要这样做？",
            }),
            e.jsxs("ul", {
              children: [
                e.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "1. 由于服务器和域名原因，每次大家都得输入地址才能访问，不方便。",
                }),
                e.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children: "2. 迁移到Github以后，大家可以直接通过域名访问。",
                }),
                e.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "3. 迁移以后，这款工具依旧是永久免费和永久开源的。永远都不会收费。",
                }),
                e.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "4. 迁移以后，能够更快的访问网页，不会出现卡顿或者打不开网页的情况。",
                }),
              ],
            }),
            e.jsx("p", {
              style: { color: "#666", marginBottom: "10px" },
              children: "迁移注意事项",
            }),
            e.jsxs("ul", {
              children: [
                e.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "1. 迁移到新网站以后，原网站（http://150.158.27.95）将逐渐关闭（一周左右），您可以将数据迁移到新的网站。",
                }),
                e.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "2. 新的网站域名将永远不会改变，您以后可以放心使用。纯前端页面，不会收集任何信息。",
                }),
                e.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "3. 如果您正在使用旧网站，可以将数据手动迁移到新网站，如果您使用的是新网站，可以忽略这条信息。",
                }),
              ],
            }),
            e.jsxs("p", {
              children: [
                "新的网站链接：",
                e.jsx("a", {
                  href: "https://bitboxtools.github.io",
                  children: "https://bitboxtools.github.io",
                }),
              ],
            }),
            e.jsxs("p", {
              children: [
                "开源地址链接：",
                e.jsx("a", {
                  href: "https://github.com/wxtsky/MyWalletScan",
                  children: "https://github.com/wxtsky/MyWalletScan",
                }),
              ],
            }),
          ],
        }),
      })
    );
  };
function Y() {
  const t = d();
  return e.jsxs("div", {
    style: { backgroundColor: "#f0f2f5", minHeight: "100vh" },
    children: [
      e.jsx($, {}),
      e.jsxs(C, {
        children: [
          e.jsx("div", {
            style: { position: "fixed", top: 0, width: "100%", zIndex: 1e3 },
            children: e.jsx(L, {
              style: {
                backgroundColor: "#f0f2f5",
                borderBottom: "1px solid #e8e8e8",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
              },
            }),
          }),
          e.jsx("div", {
            style: {
              paddingTop: "25px",
              minHeight: "95vh",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
              borderRadius: "4px",
              marginTop: "20px",
            },
            children: e.jsxs("div", {
              children: [
                t.pathname === "/" && e.jsx(m, {}),
                t.pathname === "/zksync" && e.jsx(m, {}),
                t.pathname === "/stark" && e.jsx(w, {}),
                t.pathname === "/layer" && e.jsx(E, {}),
                t.pathname === "/mirror" && e.jsx(S, {}),
                t.pathname === "/coffee" && e.jsx(B, {}),
                t.pathname === "/deposit" && e.jsx(O, {}),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { Y as default };
