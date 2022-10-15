const mongoose = require('mongoose');

// Individual Providers Schema - to add doctors/healthStaff to the accounts
const providerSchema = mongoose.Schema({
    providerName: {
        type: String,
    },
    providerNPI: {
        type: Number,
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Account',
    },
    assignedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Account',
    }],
    active: {
        type: Boolean,
        required: false,
        default: true
    }
},
{
    timestamps: true,
    }
);

// providerSchema.virtual('newUsers', {
//     ref: 'Account', // ref model to use
//     localField: 'newUsers', // field in mealSchema
//     foreignField: 'primaryContactName', // The field in meatSchema. 
//   });



module.exports = mongoose.model('Provider', providerSchema)