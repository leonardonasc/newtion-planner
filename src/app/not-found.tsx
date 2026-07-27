"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden font-work-sans text-center">
      {/* GRID BACKGROUND */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 -z-20 bg-grid opacity-40"
      />


      <h1 className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-6xl font-bold text-transparent">
        404
      </h1>

      <p className="text-2xl font-semibold text-gray-600">
        Página não encontrada
      </p>

      <span className="my-6 max-w-60 text-center font-normal text-gray-500 md:max-w-100">
        Infelizmente, a página que você está procurando não existe. Verifique a
        URL ou volte para a página inicial.
      </span>

      <Button asChild variant="outline">
        <Link href="/">
          Voltar para a página inicial
        </Link>
      </Button>
    </div>
  );
}