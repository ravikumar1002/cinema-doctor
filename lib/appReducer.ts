'use client'

export const appData = (state: any, action: any) => {

    switch (action.type) {

        case "CHANGE_TREADING_TOGGLE":
            return {
                ...state,
                trendingState: action.trendingState,
                trendingData: action.trendingData,
            }

        default:
            break;
    }

} 