import { baseUrl } from "./apiUrl";
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      Pragma: 'no-cache',
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, max-age=31536000; must-revalidate',
      'Content-Security-Policy':
        "default-src'none';script-src'self';connect-src'self';img-src'self';style-src'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests; script-src 'nonce-r4nd0m'; object-src 'none'; base-uri 'none';",
      'X-XSS-Protection': 0,
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-origin-opener-policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'same-origin',
      'x-dns-prefetch-control': 'off',
      'x-frame-options': 'SAMEORIGIN',
      'strict-transport-security': 'max-age=15552000; includeSubDomains',
      'x-download-options': 'noopen',
      'x-content-type-options': 'nosniff',
      'origin-agent-cluster': '?1',
      'x-permitted-cross-domain-policies': 'none',
      'Referrer-Policy': 'no-referrer',
    },
  });