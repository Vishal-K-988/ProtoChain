import { Cpu, ArrowRight, Code, Layers, Wallet, ChevronDown } from 'lucide-react';

function App() {



  
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground px-4 ">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6" />
            <span className="text-xl font-bold">ProtoChain</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            
     </nav>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
               <Wallet className="h-4 w-4" />
            Connect Wallet
    </button>
        </div>
      </header>

      {/* Main Content */}
                     <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                         <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
         <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Smart Contracts Made Simple
                </h1>
                                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Generate and deploy smart contracts with natural language prompts. No coding required.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="flex space-x-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                    Get Started
       </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                    Learn More
                  </button>
                     </div>
      </div>
              </div>
                        </div>
   </section>

        {/* Contract Generator Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/10">
          <div className="container px-4 md:px-6">
                 <div className="mx-auto flex max-w-[58rem]                     flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Create Smart Contracts in Seconds
                    </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Describe what you want your smart contract to do, select your blockchain, and deploy with a click.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-lg bg-card text-card-foreground border shadow-lg">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">Generate Your Smart Contract</h3>
           <p className="text-sm text-muted-foreground">Describe the functionality you need</p>
                </div>
                <div className="p-6 pt-0">
              <div className="space-y-4">
                    <textarea
                      className="flex w-full rounded-md border     border-input bg-background px-3 ring-offset-background                 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-24 resize-none py-4 text-base"
                 placeholder="Eg: Create a Todo Application  "
                    />
         <div className="flex items-center       gap-4">
                      <div className="w-1/3">
                        <div className="relative">
                 <select className="flex h-10 w-full             items-center justify-between rounded-md border border-input                bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none">
                            <option>Aptos</option>
                            <option>Polygon</option>
                            <option>Ethereum</option>
                            
                          </select>
                   <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none" />
                        </div>
                      </div>
                <button className="inline-flex  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-1 gap-2">
                        Generate Contract
                        <ArrowRight className="h-4 w-4" />
                      </button>
             </div>
            </div>
                          </div>
              </div>
        </div>
      </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
       <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    ProtoChain simplifies the entire process from idea to deployed smart contract in just three steps.
                    
                    
                    
                                      </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Describe Your Contract",
                      description: "Use natural language to describe what you want your smart contract to do.",
                    },
                    {
                      title: "Select Your Blockchain",
                      description: "Choose between Aptos, Polygon, or other supported blockchains.",
                    },
                    {
                      title: "Deploy With One Click",
                      description: "Connect your wallet and deploy your contract directly to the blockchain.",
                    },
                 
                 
                 
                 
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {index + 1}
                      </div>
                <div className="space-y-1">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="How ProtoChain works"
               className="rounded-lg object-cover"
                  width={400}
                  height={400}
                />
          </div>
        </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/10">
       <div className="container px-4 md:px-6">
       <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Features That Make the Difference
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
           ProtoChain combines powerful technology with an intuitive interface to make smart contract development accessible to everyone.
           </p>
         </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                     icon: <Code className="h-10 w-10 text-primary" />,
                  title: "AI-Powered Generation",
                  description: "Our advanced AI understands your requirements and generates secure, optimized smart contract code.",
                },
                {
                  icon: <Layers className="h-10 w-10 text-primary" />,
                  title: "Multi-Chain Support",
                  description: "Deploy to multiple blockchains including Aptos and Polygon with the same simple interface.",
                },
                {
                  icon: <Wallet className="h-10 w-10 text-primary" />,
                  title: "Seamless Wallet Integration",
                  description: "Connect your preferred wallet for a smooth deployment experience with maximum security.",
                },
              ].map((feature, index) => (
                <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    {feature.icon}
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mt-4">{feature.title}</h3>
         </div>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground">{feature.description}</p>
                </div>
                </div>
                   ))}
            </div>
          </div>
        </section>


        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Build Your Smart Contract?
              </h2>
           <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of developers and businesses who are already using ProtoChain to simplify their blockchain development.
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-4">
                Get Started for Free
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6" />
            <p className="text-sm text-muted-foreground">IGRIS</p>
          </div>
        <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
          </div>
    </div>
      </footer>
    </div>
  );
}

export default App;