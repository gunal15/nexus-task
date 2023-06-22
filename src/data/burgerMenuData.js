const burgerMenuData = [
  {
    id: 1,
    name: "Cheeseburger",
    description: "Classic burger with cheese",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Bacon Burger",
    description: "Juicy burger topped with crispy bacon",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Mushroom Swiss Burger",
    description: "Savory burger topped with mushrooms and Swiss cheese",
    image:
      "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "BBQ Burger",
    description: "Delicious burger smothered in tangy BBQ sauce",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Chicken Burger",
    description: "Satisfying burger made with tender chicken",
    image:
      "https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Veggie Burger",
    description: "Delicious vegetarian burger with fresh vegetables",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Double Cheeseburger",
    description: "Double the cheese, double the flavor",
    image:
      "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    name: "Teriyaki Burger",
    description:
      "Tasty burger topped with teriyaki sauce and grilled pineapple",
    image:
      "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    name: "Spicy Burger",
    description: "Burger with a fiery kick of spices",
    image:
      "https://images.unsplash.com/photo-1626082892105-1650809e18aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    name: "Portobello Burger",
    description: "Flavorful burger made with grilled portobello mushrooms",
    image:
      "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    name: "Turkey Burger",
    description: "Lean and tasty burger made with turkey meat",
    image:
      "https://images.unsplash.com/photo-1610970878459-a0e464d7592b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    name: "Guacamole Burger",
    description: "Burger topped with creamy guacamole",
    image:
      "https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 13,
    name: "Jalapeno Burger",
    description: "Burger with a spicy kick of jalapenos",
    image:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 14,
    name: "Mediterranean Burger",
    description: "Burger inspired by Mediterranean flavors",
    image:
      "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 15,
    name: "Black Bean Burger",
    description: "Tasty vegetarian burger made with black beans",
    image:
      "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 16,
    name: "Chili Cheeseburger",
    description: "Burger topped with flavorful chili and melted cheese",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 17,
    name: "Pulled Pork Burger",
    description: "Mouthwatering burger topped with tender pulled pork",
    image:
      "https://images.unsplash.com/photo-1599155253646-7989e08c05c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 18,
    name: "Avocado Burger",
    description: "Burger topped with creamy avocado slices",
    image:
      "https://images.unsplash.com/photo-1625683257212-116d74981941?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 19,
    name: "Buffalo Chicken Burger",
    description: "Spicy chicken burger with buffalo sauce",
    image:
      "https://images.unsplash.com/photo-1585225580177-a5f10bcfc6ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 20,
    name: "Teriyaki Chicken Burger",
    description: "Chicken burger with delicious teriyaki sauce",
    image:
      "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 21,
    name: "Sriracha Burger",
    description: "Burger with a spicy twist of Sriracha sauce",
    image:
      "https://images.unsplash.com/photo-1595531172949-30922c28a240?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 22,
    name: "Pesto Burger",
    description: "Burger topped with fresh pesto sauce",
    image:
      "https://images.unsplash.com/photo-1626483641739-96422935eb93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 23,
    name: "Hawaiian Burger",
    description: "Burger with a tropical twist of pineapple and ham",
    image:
      "https://images.unsplash.com/photo-1626082923342-83e99a2cda76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 24,
    name: "Blue Cheese Burger",
    description: "Burger topped with creamy blue cheese",
    image:
      "https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 25,
    name: "Greek Burger",
    description: "Burger inspired by Greek flavors",
    image:
      "https://images.unsplash.com/photo-1613660635034-b7a09ae11463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 26,
    name: "Salmon Burger",
    description: "Healthy burger made with fresh salmon",
    image:
      "https://images.unsplash.com/photo-1626082915404-d5143f14b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 27,
    name: "BBQ Bacon Burger",
    description: "Burger loaded with BBQ sauce and crispy bacon",
    image:
      "https://images.unsplash.com/photo-1585238341710-4d3ff484184d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 28,
    name: "Cajun Burger",
    description: "Spicy burger with Cajun seasoning",
    image:
      "https://images.unsplash.com/photo-1610614819513-58e34989848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 29,
    name: "Caprese Burger",
    description: "Burger topped with fresh mozzarella and tomatoes",
    image:
      "https://images.unsplash.com/photo-1605345981660-ab44e036a21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 30,
    name: "Burger with Fried Egg",
    description: "Burger topped with a delicious fried egg",
    image:
      "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJ1cmdlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default burgerMenuData;
