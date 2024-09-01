'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Plane, Cloud, Navigation, Briefcase, GraduationCap, Globe } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Component() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-600 flex items-center justify-center">
        <div className="text-white text-4xl font-bold flex items-center">
          <Plane className="animate-bounce mr-4 h-12 w-12" />
          <span className="animate-pulse">Chargement...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-400 to-indigo-600 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Card className="border-none shadow-2xl bg-white/90 backdrop-blur-md overflow-hidden">
          <CardContent className="p-8">
            <header className="flex flex-col md:flex-row items-center mb-12 transition-all duration-1000 ease-out transform translate-y-[-100%] opacity-0"
                    style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)', opacity: isVisible ? 1 : 0 }}>
              <div className="md:mr-8 mb-4 md:mb-0 relative">
                <div className="w-48 h-48 rounded-full border-4 border-sky-500 overflow-hidden shadow-xl">
                <Image
  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profil_picture.jpg`}
  alt="Profile Picture"
  width={200}
  height={200}
  className="object-cover"
/>



                </div>
                <div className="absolute -bottom-2 -right-2 bg-sky-500 rounded-full p-2">
                  <Plane className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-5xl font-bold text-sky-900 mb-2">Mercier Rowan</h1>
                <p className="text-2xl text-sky-700 mb-4">Alternant en Ingénierie logiciels chez Lisi Aerospace</p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <Button variant="outline" size="icon" className="bg-sky-100 hover:bg-sky-200 transition-colors duration-300"
                          onClick={() => window.open('https://github.com/RowanMrc', '_blank')}>
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-sky-100 hover:bg-sky-200 transition-colors duration-300"
                          onClick={() => window.open('https://www.linkedin.com/in/rowan-mercier', '_blank')}>
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-sky-100 hover:bg-sky-200 transition-colors duration-300"
                          onClick={() => window.location.href = 'mailto:rowan973pro@gmail.com'}>
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </header>

            <section className="mb-12 transition-all duration-1000 ease-out delay-300 transform translate-x-[-100%] opacity-0"
                     style={{ transform: isVisible ? 'translateX(0)' : 'translateX(-100%)', opacity: isVisible ? 1 : 0 }}>
              <h2 className="text-3xl font-semibold text-sky-900 mb-4 flex items-center">
                <Cloud className="mr-2" /> À propos de moi
              </h2>
              <p className="text-sky-800 text-lg leading-relaxed">
              Étudiant en informatique actuellement en alternance au sein de Lisi Aerospace | Master Développement Sup de Vinci.
              Passionné par l'aviation depuis toujours, mon but est d'évoluer au sein d'une entreprise dont le secteur d'activité est en lien avec ma passion..
              </p>
            </section>

            <section className="mb-12 transition-all duration-1000 ease-out delay-600 transform translate-x-[100%] opacity-0"
                     style={{ transform: isVisible ? 'translateX(0)' : 'translateX(100%)', opacity: isVisible ? 1 : 0 }}>
              <h2 className="text-3xl font-semibold text-sky-900 mb-4 flex items-center">
                <Cloud className="mr-2" /> Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "React", "Node.js", "Python", "VueJs", "C#", "Tableau", "NodeRed", "SQL", "CI/CD", "GIT", "C", "Travail d'équipe", "Communication", "Gestion du stress", "Gestion de projet"].map((skill, index) => (
                  <Badge key={index} className="bg-sky-200 text-sky-800 px-3 py-1 text-sm font-medium rounded-full transition-all hover:bg-sky-300 hover:scale-105">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            <section className="mb-12 transition-all duration-1000 ease-out delay-1500 transform translate-x-[-100%] opacity-0"
                     style={{ transform: isVisible ? 'translateX(0)' : 'translateX(-100%)', opacity: isVisible ? 1 : 0 }}>
              <h2 className="text-3xl font-semibold text-sky-900 mb-4 flex items-center">
                <Globe className="mr-2" /> Langues parlées
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-sky-800">Français</span>
                  <Badge className="bg-sky-200 text-sky-800 px-3 py-1 text-sm font-medium rounded-full transition-all hover:bg-sky-300 hover:scale-105">Langue maternelle</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-sky-800">Anglais</span>
                  <Badge className="bg-sky-200 text-sky-800 px-3 py-1 text-sm font-medium rounded-full transition-all hover:bg-sky-300 hover:scale-105">Courant - TOEIC 935</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-sky-800">Espagnol</span>
                  <Badge className="bg-sky-200 text-sky-800 px-3 py-1 text-sm font-medium rounded-full transition-all hover:bg-sky-300 hover:scale-105">Notions</Badge>
                </div>
              </div>
            </section>

            <section className="mb-12 transition-all duration-1000 ease-out delay-900 transform translate-y-[100%] opacity-0"
                     style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)', opacity: isVisible ? 1 : 0 }}>
              <h2 className="text-3xl font-semibold text-sky-900 mb-6 flex items-center">
                <Briefcase className="mr-2" /> Experience
              </h2>
              <div className="space-y-8">
                <Card className="bg-sky-50 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-sky-900 mb-2">Développeur logiciels</h3>
                    <p className="text-sky-700 mb-3">Lisi Aerospace | 2022 - Maintenant</p>
                    <ul className="list-disc list-inside text-sky-800 space-y-2">
                      <li>Développement de logiciels correspondants aux différents besoins métiers</li>
                      <li>Mise en place de différents workflow</li>
                      <li>Prise en considération de l'environnement cybersécurité</li>
                      <li>Reporting DATA/BI</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-sky-50 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-sky-900 mb-2">Stage-développement d'applications d'aide au dimensionnement électrique de satellites</h3>
                    <p className="text-sky-700 mb-3">Airbus Defence&Space | Arv.2022 - Juil.2022</p>
                    <ul className="list-disc list-inside text-sky-800 space-y-2">
                      <li>Prendre connaissance des besoins des ingénieurs travaillant sur l'architecture des satellites </li>
                      <li>Définir une architecture d'application et proposer un planning de développement </li>
                      <li>Développer un prototype fonctionnel de l'application en utilisant la méthode agile avec un retour utilisateur </li>
                      <li>Ecrire la documentation  </li>
                      <li>Faire des propositions d'améliorations et d'évolution de l'outil en accord avec l'activité de l'équipe  </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-sky-50 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-sky-900 mb-2">Aide/Cours particulier en informartique et technologies </h3>
                    <p className="text-sky-700 mb-3">Indépendant | 2019 - 2021</p>
                    <ul className="list-disc list-inside text-sky-800 space-y-2">
                      <li>Assurer des cours particuliers à un large panel de clients </li>
                      <li>Apporter une solution aux problèmes techniques des particuliers </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-sky-50 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-sky-900 mb-2">Saisonnier-Hôte de vente</h3>
                    <p className="text-sky-700 mb-3">TotalEnergies | Jui.2019 - Aout.2019</p>
                    <ul className="list-disc list-inside text-sky-800 space-y-2">
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="transition-all duration-1000 ease-out delay-1200 transform translate-y-[100%] opacity-0"
                     style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)', opacity: isVisible ? 1 : 0 }}>
              <h2 className="text-3xl font-semibold text-sky-900 mb-4 flex items-center">
                <GraduationCap className="mr-2" /> Education
              </h2>
              <div className="space-y-8">
              <Card className="bg-sky-50 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-sky-900 mb-2">Master en informatique, Ingénierie informartique</h3>
                  <p className="text-sky-700">Sup De Vinci | Diplomé 2024</p>
                  <p className="text-sky-800 mt-2">Développement full-stack tout en alliant des technologies innovantes comme le Cloud, l'IA, la VR et la Blockchain </p>
                </CardContent>
              </Card>
              <Card className="bg-sky-50 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-sky-900 mb-2">Licence informatique</h3>
                  <p className="text-sky-700">La Rochelle Université | Diplomé 2022</p>
                  <p className="text-sky-800 mt-2"></p>
                </CardContent>
              </Card>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}