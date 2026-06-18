export const Dining = () => {
  return (
    <div id="dining">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[60%]">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dining image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-[40%] flex flex-col gap-5 bg-[var(--color-heading)] text-[var(--color-light-text)] p-5">
          <h1 className="font-heading text-[40px] md:text-[50px] lg:text-[60px]">
            Culinary Excellence
          </h1>
          <p className="text-[14px] md:text-[16px] text-center font-text">
            At our oceanfront restaurant, dining is an experience crafted to
            delight every sense. Inspired by the richness of coastal flavors and
            elevated through contemporary culinary artistry, each dish is
            thoughtfully prepared using the finest ingredients and presented
            with exceptional attention to detail. From fresh seafood specialties
            and gourmet entrées to handcrafted desserts and expertly paired
            wines, every offering reflects our commitment to excellence.
          </p>
          <h3 className="text-[18px] font-medium">Highlights</h3>
          <ul className="list-disc list-inside space-y-1 font-text">
            <li>Oceanfront Dining</li>
            <li>Signature Creations</li>
            <li>Private Experiences</li>
            <li>Premium Wine Selection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
