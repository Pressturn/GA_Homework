require('dotenv').config();
const mongoose = require('mongoose')
const prompt = require('prompt-sync')()
const Customer = require('./models/customer')

const createCustomer = async () => {
    const name = prompt('What is the customer name?');
    const age = prompt('What is the customer age?');

    const customer = await Customer.create({ name, age })

    console.log('\nCustomer created successfully!');
    console.log(`Name: ${customer.name}, Age: ${customer.age}\n`)

}

const viewCustomers = async () => {
    const customers = await Customer.find();

    if (customers.length === 0) {
        console.log('\nNo customers found.\n')
    } else {
        console.log('\nCustomers:')
        customers.forEach(customer => {
            console.log(`id:${customer._id}, Name: ${customer.name}, Age: ${customer.age}`)
        })
    }
}

const updateCustomer = async () => {
    await viewCustomers()

    const id = prompt('\nCopy and paste the id of the customer you would like to update here: ')
    const newName = prompt('What is the customer\'s new name?')
    const newAge = prompt('What is the customers\'s new age?')

    const updated = await Customer.findByIdAndUpdate(
        id,
        { name: newName, age: newAge },
        { new: true }
    );

    if (updated) {
        console.log('\n Customer updated successfully!');
        console.log(`Updated: Name: ${updated.name}, Age: ${updated.age}\n`)
    } else {
        console.log('Customer not found.\n')
    }
}

const deleteCustomer = async () => {
    await viewCustomers();

    const id = prompt('\nCopy and paste the id of the customer you would like to delete here: ')
    const deleted = await Customer.findByIdAndDelete(id);

    if (deleted) {
        console.log('\nCustomer deleted successfully!');
        console.log(`Deleted: Name: ${deleted.name}, Age: ${deleted.age}\n`);

    } else {
        console.log('\nCustomer not found.\n')
    }
}

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    await runQueries()

    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
    process.exit()
}

const runQueries = async () => {
    console.log(`\nWelcome to CRM\n`);

    while (true) {
        console.log('What would you like to do?\n')
        console.log('1. Create a Customer')
        console.log('2. View all customers')
        console.log('3. Update a customer')
        console.log('4. Delete a customer')
        console.log('5. Quit\n')


        const choice = prompt('Number of action to run: ')

        if (choice === '1') {
            await createCustomer()
        }

        if (choice === '2') {
            await viewCustomers()
        }

        if (choice === '3') {
            await updateCustomer()
        }

        if (choice === '4') {
            await deleteCustomer()
        }

        if (choice === '5') {
            console.log('\nExiting...\n')
            break

        } else {
            console.log(`\nYou choose option ${choice}\n`)
        }
    }
}

connect()