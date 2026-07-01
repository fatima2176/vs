export default function PetServicesHomepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">🐾</span>
              </div>
              <span className="text-xl font-bold">PetCare Plus</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-secondary transition-colors">
                Services
              </a>
              <a href="#adoption" className="hover:text-secondary transition-colors">
                Adoption
              </a>
              <a href="#supplies" className="hover:text-secondary transition-colors">
                Supplies
              </a>
              <a href="#contact" className="hover:text-secondary transition-colors">
                Contact
              </a>
              <Button variant="secondary" size="sm">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Your Pet's Health & Happiness is Our <span className="text-primary">Passion</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Comprehensive veterinary care, loving pet adoption services, and premium pet supplies - all under one
                roof. We're here to support you and your furry family members.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Schedule Vet Visit
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Browse Adoptable Pets
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder-k9123.png"
                alt="Happy pets including dogs, cats, and rabbits"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Comprehensive Pet Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From routine checkups to emergency care, we provide everything your pet needs to live a healthy, happy
              life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <CardTitle>Veterinary Care</CardTitle>
                <CardDescription>
                  Complete medical care including checkups, vaccinations, surgery, and emergency services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Annual wellness exams</li>
                  <li>• Vaccinations & preventive care</li>
                  <li>• Surgical procedures</li>
                  <li>• Emergency & urgent care</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <CardTitle>Home Visits</CardTitle>
                <CardDescription>
                  Convenient in-home veterinary services for pets who are more comfortable in familiar surroundings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Wellness checkups at home</li>
                  <li>• Senior pet care</li>
                  <li>• Behavioral consultations</li>
                  <li>• End-of-life care</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✂️</span>
                </div>
                <CardTitle>Grooming & Spa</CardTitle>
                <CardDescription>
                  Professional grooming services to keep your pet looking and feeling their best.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full-service grooming</li>
                  <li>• Nail trimming & ear cleaning</li>
                  <li>• Dental hygiene</li>
                  <li>• Flea & tick treatments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pet Adoption Section */}
      <section id="adoption" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Find Your Perfect Companion</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Give a loving home to pets in need. Our adoption program connects wonderful animals with caring families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Luna", type: "Golden Retriever", age: "2 years", image: "golden retriever puppy" },
              { name: "Whiskers", type: "Tabby Cat", age: "1 year", image: "tabby cat kitten" },
              { name: "Max", type: "German Shepherd", age: "3 years", image: "german shepherd dog" },
              { name: "Bella", type: "Persian Cat", age: "4 years", image: "persian cat" },
            ].map((pet, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={`/abstract-geometric-shapes.png?height=300&width=300&query=${pet.image}`}
                    alt={`${pet.name} - ${pet.type}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{pet.name}</CardTitle>
                  <CardDescription>
                    {pet.type} • {pet.age}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-transparent" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary">
              View All Adoptable Pets
            </Button>
          </div>
        </div>
      </section>

      {/* Pet Supplies Section */}
      <section id="supplies" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Premium Pet Supplies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your pet needs for a healthy, happy life. From nutrition to toys, we have it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Premium Dog Food", price: "$49.99", category: "Nutrition", image: "premium dog food bag" },
              { name: "Interactive Cat Toy", price: "$24.99", category: "Toys", image: "interactive cat toy" },
              { name: "Comfort Pet Bed", price: "$79.99", category: "Comfort", image: "comfortable pet bed" },
              { name: "Health Supplements", price: "$34.99", category: "Health", image: "pet health supplements" },
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={`/abstract-geometric-shapes.png?height=300&width=300&query=${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're here to help you and your pet. Don't hesitate to reach out with any questions or to schedule an
                appointment.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">123 Pet Care Lane, Animal City, AC 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">(555) 123-PETS</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Pet Type</label>
                  <Input placeholder="Dog, Cat, Bird, etc." />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea placeholder="Tell us how we can help you and your pet..." className="min-h-[120px]" />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-sm">🐾</span>
                </div>
                <span className="text-xl font-bold">PetCare Plus</span>
              </div>
              <p className="text-primary-foreground/80">Your trusted partner in pet health and happiness.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Veterinary Care</li>
                <li>Home Visits</li>
                <li>Grooming</li>
                <li>Emergency Care</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Adoption</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Available Pets</li>
                <li>Adoption Process</li>
                <li>Foster Program</li>
                <li>Success Stories</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>(555) 123-PETS</li>
                <li>info@petcareplus.com</li>
                <li>123 Pet Care Lane</li>
                <li>Animal City, AC 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 PetCare Plus. All rights reserved. Made with ❤️ for pets and their families.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
