"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/bar/landing-navbar";

export default function NotFound() {
  return (
    <>
      <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden font-work-sans text-center">
        {/* GRID BACKGROUND */}
        <header>
          <nav className="fixed top-0 left-0 right-0 z-50 p-2">
            <LandingNavbar />
          </nav>
        </header>
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
          Infelizmente, a página que você está procurando não existe ou ainda não foi implementada. Verifique a
          URL ou volte para a página inicial.
        </span>

        <Button asChild variant="outline">
          <Link href="/">
            Voltar para a página inicial
          </Link>
        </Button>

      </div>
      <footer className="relative z-30 bg-offwhite-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto p-4">
          <Footer />
        </div>
      </footer>
    </>
  );
}