import type { Brand } from "@/types";
import productsRaw from "./products.json";

type Product = {
  id: string;
  brand?: string;
  model: string;
  name: string;
  category?: string;
  operation?: string;
  thumbnail?: string;
  media?: { youtubeId?: string };
  description?: string;
  spec?: Record<string, unknown>;
};

const products = productsRaw as unknown as Product[];

// helpers
const thumbToPublicPath = (thumb?: string) => {
  if (!thumb) return "/placeholder-machine.jpg";
  if (thumb.startsWith("/")) return thumb;
  return `/${thumb}`;
};

const youtubeToEmbedUrl = (youtubeId?: string) => {
  if (!youtubeId) return undefined;
  const [id, rest] = youtubeId.split("&");
  const params = rest ? `?${rest}` : "";
  return `https://www.youtube.com/embed/${id}${params}`;
};

// Convert any spec value to a string because Machine.specifications expects Record<string,string>
const specToStrings = (spec?: Record<string, unknown>): Record<string, string> => {
  const out: Record<string, string> = {};
  if (!spec) return out;

  for (const [k, v] of Object.entries(spec)) {
    if (v === null || v === undefined) continue;

    if (typeof v === "string") out[k] = v;
    else if (typeof v === "number" || typeof v === "boolean") out[k] = String(v);
    else if (Array.isArray(v)) out[k] = v.map(String).join(", ");
    else out[k] = JSON.stringify(v); // objects
  }
  return out;
};

// Your Machine.stock is strict union; JSON doesn't have stock -> choose a default
const DEFAULT_STOCK: "In Stock" = "In Stock";

export const brands: Brand[] = [
  {
    id: "dukejia",
    name: "DukeJIA",
    logo: "/machine_card_01.jpg",
    description: "DukeJIA product portfolio.",
    machines: products.map((p) => ({
      id: p.id,
      name: p.name,
      model: p.model,
      type: p.category || p.operation || "Machine",

      // MUST be string per your type
      price: "On Request",

      // MUST be one of the allowed strings
      stock: DEFAULT_STOCK,

      image: thumbToPublicPath(p.thumbnail),
      videoUrl: youtubeToEmbedUrl(p.media?.youtubeId),

      // Your JSON doesn't have these currently, so keep them undefined / false
      catalogUrl: undefined,
      has3DModel: false,

      description: p.description || "",
      specifications: specToStrings(p.spec),
    })),
  },
];
