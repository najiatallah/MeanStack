import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required:true,
        default: '',
    },
    lastName: {
        type: String,
        trim: true,
        required:true,
        default: '',
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: "Pleae fill in an email"
    },
    // username: {
    //     type: String,
    //     unique: 'Username already exists',
    //     required: 'Please fill in a username',
    //     lowercase: true,
    //     trim: true
    // },
    password: {
        type: String,
        default: ''
    },
    salt: {
        type: String
    },
    roles: {
        type: [{
            type: String,
            enum: ['user', 'manager', 'admin'],
            default: 'user'
        }],
        default: ['user']
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    }
});

UserSchema.plugin(mongoosePaginate);
UserSchema.plugin(uniqueValidator);
export const User = mongoose.model('User', UserSchema);