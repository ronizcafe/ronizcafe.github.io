import type { NextPage } from 'next';

const Home: NextPage = () => {
  // Menu data
  const menuSections = [
    {
      title: 'Coffee & Espresso',
      items: [
        { name: 'Espresso', description: 'Single shot of our premium roast', price: '$3.50' },
        { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '$4.50' },
        { name: 'Latte', description: 'Smooth espresso with velvety steamed milk', price: '$5.00' },
        { name: 'Cold Brew', description: 'Slow-steeped for 18 hours', price: '$4.75' },
      ],
    },
    {
      title: 'Tea Selection',
      items: [
        { name: 'Earl Grey', description: 'Classic bergamot black tea', price: '$3.50' },
        { name: 'Chamomile', description: 'Organic calming herbal tea', price: '$3.50' },
        { name: 'Matcha Latte', description: 'Ceremonial grade matcha', price: '$5.50' },
      ],
    },
    {
      title: 'Pastries',
      items: [
        { name: 'Croissant', description: 'Buttery French-style', price: '$3.75' },
        { name: 'Almond Croissant', description: 'Filled with almond cream', price: '$4.50' },
        { name: 'Blueberry Muffin', description: 'Fresh blueberries in every bite', price: '$3.50' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-amber-900 text-amber-50 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">Roniz Cafe</h1>
          <p className="text-amber-200 italic text-lg">Artisanal Coffee & Fresh Pastries</p>
        </div>
      </header>

      {/* Menu Container */}
      <main className="max-w-4xl mx-auto py-8 px-4">
        {menuSections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="font-serif text-3xl text-amber-800 border-b-2 border-dashed border-amber-200 pb-2 mb-6">
              {section.title}
            </h2>
            
            <div className="space-y-6">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col sm:flex-row justify-between gap-2 pb-4 border-b border-dotted border-amber-200">
                  <div>
                    <h3 className="font-semibold text-lg text-amber-900">{item.name}</h3>
                    <p className="text-amber-600 italic text-sm">{item.description}</p>
                  </div>
                  <span className="text-amber-700 font-bold sm:text-right">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="mb-1">Open daily 7am - 7pm</p>
          <p className="mb-1">123 Coffee Street, Beanville</p>
          <p>☎ (555) 123-4567</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;