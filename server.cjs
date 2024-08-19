const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/contact", (req, res) => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  res.json({
    firstName,
    lastName,
    fullName: faker.person.fullName({ firstName, lastName }),
    image: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    emailAddress: faker.internet.email({ firstName, lastName }),
    phoneNumber: {
      mobile: faker.phone.number(),
    },
    job: {
      title: faker.person.jobTitle(),
      company: faker.company.name(),
    },
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
    },
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
