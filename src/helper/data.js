const data = [
    {
      "id": 1,
      "name": "John",
      "surname": "Smith",
      "phone": "+905551234567",
      "email": "john.smith@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
      "job": "Software Engineer"
    },
    {
      "id": 2,
      "name": "Emma",
      "surname": "Johnson",
      "phone": "+905559876543",
      "email": "emma.johnson@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
      "job": "UX Designer"
    },
    {
      "id": 3,
      "name": "Michael",
      "surname": "Brown",
      "phone": "+905554567890",
      "email": "michael.brown@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
      "job": "Frontend Developer"
    },
    {
      "id": 4,
      "name": "Olivia",
      "surname": "Davis",
      "phone": "+905557890123",
      "email": "olivia.davis@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
      "job": "Product Manager"
    },
    {
      "id": 5,
      "name": "James",
      "surname": "Miller",
      "phone": "+905552345678",
      "email": "james.miller@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
      "job": "Backend Developer"
    },
    {
      "id": 6,
      "name": "Sophia",
      "surname": "Wilson",
      "phone": "+905558765432",
      "email": "sophia.wilson@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/6.jpg",
      "job": "Data Scientist"
    },
    {
      "id": 7,
      "name": "William",
      "surname": "Taylor",
      "phone": "+905553456789",
      "email": "william.taylor@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/7.jpg",
      "job": "Software Engineer"
    },
    {
      "id": 8,
      "name": "Isabella",
      "surname": "Anderson",
      "phone": "+905557654321",
      "email": "isabella.anderson@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/8.jpg",
      "job": "UX Designer"
    },
    {
      "id": 9,
      "name": "Noah",
      "surname": "Martinez",
      "phone": "+905551234567",
      "email": "noah.martinez@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/9.jpg",
      "job": "Frontend Developer"
    },
    {
      "id": 10,
      "name": "Olivia",
      "surname": "Jones",
      "phone": "+905559876543",
      "email": "olivia.jones@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
      "job": "Product Manager"
    },
    {
      "id": 11,
      "name": "Liam",
      "surname": "Harris",
      "phone": "+905554567890",
      "email": "liam.harris@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/11.jpg",
      "job": "Backend Developer"
    },
    {
      "id": 12,
      "name": "Ava",
      "surname": "Clark",
      "phone": "+905557890123",
      "email": "ava.clark@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/12.jpg",
      "job": "Data Scientist"
    },
    {
      "id": 13,
      "name": "Benjamin",
      "surname": "Lewis",
      "phone": "+905552345678",
      "email": "benjamin.lewis@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/13.jpg",
      "job": "Software Engineer"
    },
    {
      "id": 14,
      "name": "Mia",
      "surname": "Hall",
      "phone": "+905558765432",
      "email": "mia.hall@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/14.jpg",
      "job": "UX Designer"
    },
    {
      "id": 15,
      "name": "Daniel",
      "surname": "Young",
      "phone": "+905553456789",
      "email": "daniel.young@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/15.jpg",
      "job": "Frontend Developer"
    },
    {
      "id": 16,
      "name": "Charlotte",
      "surname": "Walker",
      "phone": "+905557654321",
      "email": "charlotte.walker@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/16.jpg",
      "job": "Product Manager"
    },
    {
      "id": 17,
      "name": "Mason",
      "surname": "King",
      "phone": "+905551234567",
      "email": "mason.king@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/17.jpg",
      "job": "Backend Developer"
    },
    {
      "id": 18,
      "name": "Amelia",
      "surname": "Lee",
      "phone": "+905559876543",
      "email": "amelia.lee@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/18.jpg",
      "job": "Data Scientist"
    },
    {
      "id": 19,
      "name": "Ethan",
      "surname": "Green",
      "phone": "+905554567890",
      "email": "ethan.green@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/19.jpg",
      "job": "Software Engineer"
    },
    {
      "id": 20,
      "name": "Harper",
      "surname": "Hall",
      "phone": "+905557890123",
      "email": "harper.hall@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/20.jpg",
      "job": "UX Designer"
    },
    {
      "id": 21,
      "name": "Alexander",
      "surname": "Adams",
      "phone": "+905552345678",
      "email": "alexander.adams@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/21.jpg",
      "job": "Frontend Developer"
    },
    {
      "id": 22,
      "name": "Abigail",
      "surname": "Young",
      "phone": "+905558765432",
      "email": "abigail.young@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/22.jpg",
      "job": "Product Manager"
    },
    {
      "id": 23,
      "name": "Daniel",
      "surname": "Wright",
      "phone": "+905553456789",
      "email": "daniel.wright@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/23.jpg",
      "job": "Backend Developer"
    },
    {
      "id": 24,
      "name": "Emily",
      "surname": "Lopez",
      "phone": "+905557654321",
      "email": "emily.lopez@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/24.jpg",
      "job": "Data Scientist"
    },
    {
      "id": 25,
      "name": "Matthew",
      "surname": "Roberts",
      "phone": "+905551234567",
      "email": "matthew.roberts@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/25.jpg",
      "job": "Software Engineer"
    },
    {
      "id": 26,
      "name": "Sofia",
      "surname": "Gonzalez",
      "phone": "+905559876543",
      "email": "sofia.gonzalez@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/26.jpg",
      "job": "UX Designer"
    },
    {
      "id": 27,
      "name": "Joseph",
      "surname": "Scott",
      "phone": "+905554567890",
      "email": "joseph.scott@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/27.jpg",
      "job": "Frontend Developer"
    },
    {
      "id": 28,
      "name": "Grace",
      "surname": "Baker",
      "phone": "+905557890123",
      "email": "grace.baker@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/28.jpg",
      "job": "Product Manager"
    },
    {
      "id": 29,
      "name": "Samuel",
      "surname": "Hill",
      "phone": "+905552345678",
      "email": "samuel.hill@example.com",
      "avatar": "https://randomuser.me/api/portraits/men/29.jpg",
      "job": "Backend Developer"
    },
    {
      "id": 30,
      "name": "Victoria",
      "surname": "Turner",
      "phone": "+905558765432",
      "email": "victoria.turner@example.com",
      "avatar": "https://randomuser.me/api/portraits/women/30.jpg",
      "job": "Data Scientist"
    }
  ]
  
  
  export default data;