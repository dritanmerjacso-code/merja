"use client";

import { useState } from "react";

export default function ChatPage() {
  const [isVIP, setIsVIP] = useState(false);
  const [questionsLeft, setQuestionsLeft] = useState(3);
  const [value, setValue] = useState("");

  function handleAsk() {
    if (!value.trim()) return;

    if (!isVIP && questionsLeft <= 0) {
      alert("Ke mbaruar pyetjet falas. Kalo në Premium ose hyr si VIP.");
      return;
    }

    if (!isVIP) {
      setQuestionsLeft((n) => n - 1);
    }

    alert("Pyetja u dërgua (mock). Më vonë këtu lidhet Merja AI.");
    setValue("");
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Merja AI (Premium)</h1>
<p className="mb-4 text-neutral-600 text-sm">
  3 free questions for guests. Unlimited questions for VIP clients.
</p>


      <div className="mb-4 flex items-center gap-3 text-sm">
        <button
          onClick={() => setIsVIP((v) => !v)}
          className="rounded-2xl border px-3 py-1 hover:bg-neutral-50"
        >
          {isVIP ? "Dil nga VIP (simulim)" : "Hyr si VIP (simulim)"}
        </button>
        {isVIP ? "Log out (mock)" : "Login as VIP (mock)"}
...
<span className="text-neutral-500">
  Free questions remaining: {questionsLeft}
</span>
...
alert("Question sent (demo only). Connection to Merja AI coming soon.");

        {isVIP && <span className="text-emerald-600">VIP aktiv (mock)</span>}
      </div>

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Shkruaj pyetjen tënde për produktet, terapitë ose kombinimet..."
        className="min-h-32 w-full rounded-2xl border bg-white p-4 text-sm outline-none"
      />

      <div className="mt-3">
        <button
          onClick={handleAsk}
          className="rounded-2xl bg-black px-4 py-2 text-white text-sm hover:opacity-90"
        >
          Dërgo pyetjen
        </button>
      </div>
    </section>
  );
}
