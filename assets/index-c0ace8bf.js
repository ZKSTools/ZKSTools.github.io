import { r as i, u as x, f as c, j as t } from "./index-afe07c5a.js";
import "./save_excel-cb1df995.js";
import { a as f } from "./axios-978d9c6f.js";
import { b as y, M as j } from "./index-ff226b70.js";
import { A as m, _ as a } from "./EditOutlined-de6b3128.js";
import l from "./index-ffa73956.js";
import g from "./index-08323f84.js";
import b from "./index-6a70de72.js";
import k from "./index-7c311ab7.js";
import v from "./index-be7b8dd7.js";
import w from "./index-9da5ca07.js";
import { L as S } from "./index-5724bf76.js";
import "./index-185fa886.js";
import "./index-4613b112.js";
import "./index-26b60554.js";
var B = {
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
const E = B;
var p = function (r, o) {
  return i.createElement(m, a(a({}, r), {}, { ref: o, icon: E }));
};
p.displayName = "GithubOutlined";
const O = i.forwardRef(p);
var C = {
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
const M = C;
var h = function (r, o) {
  return i.createElement(m, a(a({}, r), {}, { ref: o, icon: M }));
};
h.displayName = "TwitterOutlined";
const T = i.forwardRef(h),
  z = async () => {
    try {
      const e = {
        method: "GET",
        url: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
      };
      return (await f.request(e)).data.USD;
    } catch (e) {
      return console.log(e), "/";
    }
  };
const G = () => {
    const [e, r] = i.useState(null);
    return (
      i.useEffect(() => {
        const o = async () => {
          const n = await z();
          r(n);
        };
        o();
        const s = setInterval(o, 1e4);
        return () => clearInterval(s);
      }, []),
      e === null
        ? t.jsx("div", { children: "Loading ETH Price..." })
        : t.jsxs("div", { children: ["ETH Price: $", e] })
    );
  },
  P = () => {
    const e = [
        { label: "zkSync", key: "zksync" },
        { label: "Stark", key: "stark" },
        { label: "LayerZero", key: "layer" },
        { label: "Mirror", key: "mirror" },
        { label: "Deposit", key: "deposit" },
        { label: "Coffee", key: "coffee" },
        {
          label: t.jsx("a", {
            href: "https://github.com/wxtsky/MyWalletScan",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t.jsx(O, {}),
          }),
          key: "github",
        },
        {
          label: t.jsx("a", {
            href: "https://twitter.com/jingluo0",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t.jsx(T, {}),
          }),
          key: "twitter",
        },
        { label: t.jsx(G, {}), key: "ethPrice" },
      ],
      r = x(),
      o = c(),
      [s, n] = i.useState(o.pathname.replace("/", "") || "zksync"),
      d = (u) => {
        n(u.key);
      };
    return (
      i.useEffect(() => {
        o.pathname.replace("/", "") === "twitter" ||
          o.pathname.replace("/", "") === "github" ||
          n(o.pathname.replace("/", "") || "zksync");
      }, [o.pathname]),
      i.useEffect(() => {
        s === "twitter" || s === "github" || r(`/${s}`);
      }, [s]),
      t.jsx(y, {
        onClick: d,
        selectedKeys: [s],
        mode: "horizontal",
        style: { display: "flex", justifyContent: "center" },
        className: "custom-menu",
        items: e,
      })
    );
  },
  H = () => {
    const [e, r] = i.useState(!1);
    return (
      i.useEffect(() => {
        r(0);
      }, []),
      t.jsx("div", {
        children: t.jsxs(j, {
          title: "注意事项(2023-05-17)",
          open: e,
          onOk: () => r(!1),
          onCancel: () => r(!1),
          style: { fontFamily: "Arial, sans-serif", top: 20 },
          okText: "知道了",
          children: [
            t.jsx("h2", {
              style: { color: "#333", marginBottom: "15px" },
              children: "Hello,大家好，我是开发者北北",
            }),
            t.jsx("p", {
              style: { color: "#666", marginBottom: "10px" },
              children:
                "开发这款工具的初衷是为了方便大家查看自己的钱包信息，一直秉持着免费开源的原则，希望大家喜欢。",
            }),
            t.jsx("p", {
              style: { color: "#666", marginBottom: "10px" },
              children:
                "一开始我开发这款工具的时候，是放到自己的国内服务器上供大家使用的，但是，由于政策相关原因，我不得不将他迁移到Github静态页面上。",
            }),
            t.jsx("p", {
              style: { color: "#666", marginBottom: "10px" },
              children: "为什么要这样做？",
            }),
            t.jsxs("ul", {
              children: [
                t.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "1. 由于服务器和域名原因，每次大家都得输入地址才能访问，不方便。",
                }),
                t.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children: "2. 迁移到Github以后，大家可以直接通过域名访问。",
                }),
                t.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "3. 迁移以后，这款工具依旧是永久免费和永久开源的。永远都不会收费。",
                }),
                t.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "4. 迁移以后，能够更快的访问网页，不会出现卡顿或者打不开网页的情况。",
                }),
              ],
            }),
            t.jsx("p", {
              style: { color: "#666", marginBottom: "10px" },
              children: "迁移注意事项",
            }),
            t.jsxs("ul", {
              children: [
                t.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "1. 迁移到新网站以后，原网站（http://150.158.27.95）将逐渐关闭（一周左右），您可以将数据迁移到新的网站。",
                }),
                t.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "2. 新的网站域名将永远不会改变，您以后可以放心使用。纯前端页面，不会收集任何信息。",
                }),
                t.jsx("li", {
                  style: { color: "#666", marginBottom: "10px" },
                  children:
                    "3. 如果您正在使用旧网站，可以将数据手动迁移到新网站，如果您使用的是新网站，可以忽略这条信息。",
                }),
              ],
            }),
            t.jsxs("p", {
              children: [
                "新的网站链接：",
                t.jsx("a", {
                  href: "https://bitboxtools.github.io",
                  children: "https://bitboxtools.github.io",
                }),
              ],
            }),
            t.jsxs("p", {
              children: [
                "开源地址链接：",
                t.jsx("a", {
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
function Q() {
  const e = c();
  return t.jsxs("div", {
    style: { backgroundColor: "#f0f2f5", minHeight: "100vh" },
    children: [
      t.jsx(H, {}),
      t.jsxs(S, {
        children: [
          t.jsx("div", {
            style: { position: "fixed", top: 0, width: "100%", zIndex: 1 },
            children: t.jsx(P, {
              style: {
                backgroundColor: "#f0f2f5",
                borderBottom: "1px solid #e8e8e8",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
              },
            }),
          }),
          t.jsx("div", {
            style: {
              minHeight: "85vh",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
              borderRadius: "4px",
              marginTop: "45px",
            },
            children: t.jsxs("div", {
              children: [
                e.pathname === "/" && t.jsx(l, {}),
                e.pathname === "/zksync" && t.jsx(l, {}),
                e.pathname === "/stark" && t.jsx(g, {}),
                e.pathname === "/layer" && t.jsx(b, {}),
                e.pathname === "/mirror" && t.jsx(k, {}),
                e.pathname === "/coffee" && t.jsx(v, {}),
                e.pathname === "/deposit" && t.jsx(w, {}),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { Q as default };
