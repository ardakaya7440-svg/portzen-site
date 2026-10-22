#!/usr/bin/env node
/**
 * Yönetici şifresi için scrypt özeti üretir (ADMIN_PASSWORD_HASH).
 * Kullanım: npm run admin:hash            (şifreyi sorar, ekrana yazdırmaz)
 *           npm run admin:hash -- --secret  (ayrıca rastgele SESSION_SECRET üretir)
 */
import { randomBytes, scryptSync } from "node:crypto";
import readline from "node:readline";

function hash(pw) {
  const salt = randomBytes(16);
  const h = scryptSync(pw, salt, 32, { N: 16384, r: 8, p: 1 });
  return `scrypt$16384$8$1$${salt.toString("base64")}$${h.toString("base64")}`;
}

async function ask(q) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
  const origWrite = rl._writeToOutput;
  rl._writeToOutput = (s) => (s.includes(q) ? origWrite.call(rl, s) : origWrite.call(rl, "*"));
  return new Promise((res) => rl.question(q, (a) => { rl.close(); process.stdout.write("\n"); res(a); }));
}

const pw = process.env.ADMIN_PASSWORD_INPUT ?? (await ask("Yönetici şifresi (en az 12 karakter): "));
if (!pw || pw.length < 12) {
  console.error("Şifre en az 12 karakter olmalı.");
  process.exit(1);
}
console.log(`ADMIN_PASSWORD_HASH=${hash(pw)}`);
if (process.argv.includes("--secret")) console.log(`SESSION_SECRET=${randomBytes(48).toString("base64url")}`);
