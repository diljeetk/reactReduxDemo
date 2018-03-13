
export const  types = {
    educationDetails: 'Education_details_submitted',
    personalDetails: 'Personal_details_submitted',

}

export const  persistPersonalDetails = userDetails => {
    return {
        type : types.personalDetails,
        userDetails,
    }
    
}

export const  persistEducationDetails = educationDetails => {
    return {
        type : types.educationDetails,
        educationDetails,
    }
    
}

