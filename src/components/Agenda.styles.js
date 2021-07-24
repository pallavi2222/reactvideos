import styled from 'styled-components'
export const Total = styled.div`
@media only screen and (max-width: 600px) {
     margin-left:10px;
     margin-right:5px;
}

`;
export const Headline = styled.h1`
    font-weight: 660;
    letter-spacing: -0.02em;
    font-size: 2.600em;
    padding-left:57px;
    padding-left:57px;
    margin-bottom: 0px;
    @media only screen and (max-width: 600px) {
        font-weight: 660;
    letter-spacing: -0.02em;
    font-size: 2.600em;
    padding-left:10px;
    margin-bottom: 0px;
    font-size: 31px;
   
}
`;
export const Desc = styled.p`
 padding-left:57px;
 font-size: 14.7px;
 margin-bottom: 40px;
 margin-top:16px;
 @media only screen and (max-width: 600px) {
    padding-left:10px;
    padding-right: 18px;
 font-size: 14.9px;
 margin-bottom: 40px;
 margin-top:16px;   
   
}
`;
export const Box = styled.div`
margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  
    width: 90%;
    height: 473px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-around;
    -webkit-flex-wrap: nowrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
   
height:auto;
margin-right: 10px;
margin-left: 10px;
display:list-item;
justify-content:center;
justify-items: center;
align-items: center;
padding-left: auto;
padding-right: auto;
padding-bottom: 10px;
border-bottom: 0.5px solid #e6dfdf;
margin-bottom: 10px;
}
    
    
`;
export const Display = styled.div`
@media only screen and (max-width: 600px) {
   display :flex ;
}
`;
export const InnerBox1 = styled.div`
height:473px;
width:30.7%;
@media only screen and (max-width: 600px) {
   display :flex ;
   width:auto;
   height:auto;
   

}
:hover h3{
    color: #84919c;
}
`;
export const Middle = styled.div`
height:473px;
width:30.7%;
padding-left: 18px;
padding-right: 18px;
border-left: 0.5px solid #e6dfdf;
border-right: 0.5px solid #e6dfdf;
:hover h3{
    color: #84919c;

}


@media only screen and (max-width: 600px) {
    display :flex ;
   width:auto;
   height:auto;
   padding-top: 10px;
padding-bottom: 10px;
padding-left: 0px;
padding-right: 0px;
border-left: 0px solid #e6dfdf;
border-right: 0px solid #e6dfdf;
border-top: 0.5px solid #e6dfdf;
border-bottom: 0.5px solid #e6dfdf;
margin-bottom: 10px;
margin-top: 10px;
}
`;
export const Images = styled.img`
height:177px;
width:100%;
margin-left: auto;
margin-right: auto;
@media only screen and (max-width: 600px) {
   
   width:27%;
   height:65px;


}

`;
export const Imagecaption = styled.p`
font-weight: 650;
    text-transform: uppercase;
    color: #005c9c;
    font-size:13px;
    @media only screen and (max-width: 600px) {
   display: none;


}
    

`;
export const Imagecontent = styled.div`
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height:292px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    @media only screen and (max-width: 600px) {
    height:auto;
    padding-left: 20px;




}

`;
export const Imagetitle = styled.h3`
    font-size:20px;
    line-height: 1.15;
    font-weight: bold;
    font-weight: 650;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: "Neue Helvetica W01", "Helvetica Neue", Helvetica, Arial, sans-serif;
    @media only screen and (max-width: 600px) {
    font-size: 16px;


}
}


`;
export const Imagedescription = styled.p`
    display: block;
    font-size:14.09px;
    width:90%;
    line-height: 1.6em;
    font-family: "Neue Helvetica W01", "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: auto;
    @media only screen and (max-width: 600px) {
   display: none;


}
`;
export const ImageBottomcaption = styled.div`
 margin-top: auto;
 margin-bottom: 5px;
 @media only screen and (max-width: 600px) {
   margin-top:5px;
   margin-bottom: 0px;

}

`;
export const Author = styled.span`
    color: #84919c;
    font-size: 0.800em;
    line-height: 1.4;
    font-weight: 650;
`;
export const Date = styled.span`
    color: #84919c;
    font-size:13px;
    line-height: 1.4;
`;
export const Pageno = styled.div`
margin:40px 0px;
height:40px;
width:90%;
border:1px solid #e6dfdf;
margin-left: auto;
    margin-right: auto;
    display: flex;

`;
export const Prev = styled.div`
height:auto;
width:11%;
border-right:1px solid #e6dfdf;
padding-top: 10px;
padding-bottom:10px;
text-align: center;
font-size:12px;
font-weight: bold;
color:#d5e0e8;
@media only screen and (max-width: 600px) {
   width:25%;

}
`;
export const Number = styled.div`
height:auto;
width:78%;
border-right:1px solid #e6dfdf;
padding-top: 10px;
padding-bottom:10px;
text-align: center;
font-size:12px;
font-weight: bold;
color:#d5e0e8;
@media only screen and (max-width: 600px) {
   width:50%;

}
`;
export const Next = styled.div`
height:auto;
width:11%;
padding-top: 10px;
padding-bottom:10px;
text-align: center;
font-size:12px;
font-weight: bold;
color:black;
@media only screen and (max-width: 600px) {
   width:25%;

}

`;

