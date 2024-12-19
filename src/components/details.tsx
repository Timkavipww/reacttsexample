import { memo } from "react";
import { IDetails } from "../types.ts/types";
import React from "react";
interface Props {
    details: IDetails
    handleLoading: () => void 

}

const InitialDetails = ({details, handleLoading }: Props)=> {

    return (
        <>
        <div className='p-auto m-auto justify-center items-center text-3xl flex flex-col pt-10 px-40'>
            {/* {MENU.map(item => (<span key={item.link}>{item.name}</span>))} */}
            {/* <button onClick={() => setDetails(prev => {
                return {
                    ...prev,
                    title: prev.title + "new",
                    }
                },
            )
                }
            >
                        {details.buttonText}</button> */}
            <button onClick={handleLoading}>{details.buttonText}</button>
            <h1>{details.title}</h1>
            <div>{details.description}</div>
          </div> 
          </>
          );
          
}


export const Details = memo(InitialDetails);

