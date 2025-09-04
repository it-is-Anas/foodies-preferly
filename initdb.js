const sql = require('better-sqlite3');

const db = sql('meals.db');

const dummymeals = [
    {
        title: 'Donatelos Chocolate!',
        slug: 'chocolate-donatelos',
        image: '/assets/food1.png',
        summary: 'Decadent chocolate-filled pastries with a crispy exterior and rich, molten chocolate center that melts in your mouth.',
        creator: 'Ana',
        creator_email: 'anas@email.com',
        instructions: `
            1. Preheat oven to 375°F (190°C)
            2. Prepare chocolate filling by melting premium dark chocolate
            3. Roll out pastry dough and cut into circles
            4. Place chocolate filling in center of each circle
            5. Fold and seal edges, brush with egg wash
            6. Bake for 15-20 minutes until golden brown
            7. Dust with powdered sugar before serving
        `,
    },
    {
        title: 'Mediterranean Grilled Salmon',
        slug: 'mediterranean-salmon',
        image: '/assets/food1.png',
        summary: 'Fresh salmon fillets marinated in olive oil, lemon, and herbs, grilled to perfection with a crispy skin.',
        creator: 'Chef Marco',
        creator_email: 'marco@mediterranean.com',
        instructions: `
            1. Mix olive oil, lemon juice, garlic, and herbs for marinade
            2. Marinate salmon fillets for 30 minutes
            3. Preheat grill to medium-high heat
            4. Grill salmon skin-side down for 5-6 minutes
            5. Flip and grill for another 3-4 minutes
            6. Serve with lemon wedges and fresh herbs
        `,
    },
    {
        title: 'Vegetable Biryani',
        slug: 'vegetable-biryani',
        image: '/assets/food1.png',
        summary: 'Fragrant basmati rice cooked with assorted vegetables, aromatic spices, and saffron, layered with fried onions.',
        creator: 'Priya',
        creator_email: 'priya@indiankitchen.com',
        instructions: `
            1. Soak basmati rice for 30 minutes
            2. Sauté whole spices in ghee
            3. Add vegetables and cook until tender
            4. Layer rice and vegetable mixture in pot
            5. Add saffron milk and fried onions between layers
            6. Cook on dum (steam) for 20 minutes
            7. Garnish with fresh coriander and mint
        `,
    },
    {
        title: 'Classic Margherita Pizza',
        slug: 'margherita-pizza',
        image: '/assets/food1.png',
        summary: 'Traditional Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil.',
        creator: 'Giovanni',
        creator_email: 'giovanni@pizzanapoletana.com',
        instructions: `
            1. Prepare pizza dough and let it rise for 24 hours
            2. Preheat pizza stone at 485°F (250°C)
            3. Stretch dough to form thin crust
            4. Spread crushed San Marzano tomatoes
            5. Add fresh mozzarella di bufala
            6. Bake for 60-90 seconds until crust is blistered
            7. Top with fresh basil and olive oil
        `,
    },
    {
        title: 'Berry Cheesecake',
        slug: 'berry-cheesecake',
        image: '/assets/food1.png',
        summary: 'Creamy New York-style cheesecake with a graham cracker crust, topped with mixed berry compote.',
        creator: 'Sarah',
        creator_email: 'sarah@bakery.com',
        instructions: `
            1. Make crust with crushed graham crackers and butter
            2. Press into springform pan and bake for 10 minutes
            3. Beat cream cheese, sugar, and eggs until smooth
            4. Pour filling over crust and bake in water bath
            5. Cool gradually in oven to prevent cracking
            6. Top with fresh berry compote before serving
        `,
    },
    {
        title: 'Thai Green Curry',
        slug: 'thai-green-curry',
        image: '/assets/food1.png',
        summary: 'Aromatic green curry paste simmered in coconut milk with chicken, eggplant, and Thai basil.',
        creator: 'Nong',
        creator_email: 'nong@thaicuisine.com',
        instructions: `
            1. Prepare green curry paste from fresh ingredients
            2. Fry curry paste in coconut cream until fragrant
            3. Add chicken and cook until no longer pink
            4. Pour in coconut milk and bring to simmer
            5. Add eggplant and cook until tender
            6. Season with fish sauce and palm sugar
            7. Garnish with Thai basil and chili
        `,
    },
    {
        title: 'Beef Bourguignon',
        slug: 'beef-bourguignon',
        image: '/assets/food1.png',
        summary: 'Classic French beef stew slow-cooked in red wine with pearl onions, mushrooms, and bacon.',
        creator: 'Pierre',
        creator_email: 'pierre@frenchbistro.com',
        instructions: `
            1. Marinate beef in red wine overnight
            2. Brown beef cubes in rendered bacon fat
            3. Add pearl onions and mushrooms
            4. Deglaze with red wine marinade
            5. Slow cook for 3-4 hours until beef is tender
            6. Serve with crusty bread or mashed potatoes
        `,
    }
];

// Fixed: Removed trailing comma after creator_email
db.prepare(`
    CREATE TABLE IF NOT EXISTS meals(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        summary TEXT NOT NULL,
        instructions TEXT NOT NULL,
        creator TEXT NOT NULL,
        creator_email TEXT NOT NULL
    )    
`).run();

async function initData(){
    // Fixed: Removed trailing comma after @creator_email
    const stmt = db.prepare(`
        INSERT INTO meals VALUES(
            null,
            @slug,
            @title,
            @image,
            @summary,
            @instructions,
            @creator,
            @creator_email
        )
    `);

    for(const meal of dummymeals){
        stmt.run(meal);
    }
}

// Don't forget to call the function to initialize data
initData();

console.log('Database initialized successfully!');