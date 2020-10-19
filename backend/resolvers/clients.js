const ClientQuery = {};

const ClientMutation = {
    createClient: async( _, {name, mail, orders}, {Client}) => {
        try {
            const newClient = await new Client({ name, mail, orders });
            console.log({newClient})
            return newClient.save();
        }
        catch(err) {
            console.log(`SOMETHING WRONG :( ${err}`)
            throw err;
        }
    } 
};

module.exports = { ClientQuery, ClientMutation };