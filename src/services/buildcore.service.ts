export const didEthUserAlreadyClaim = async (ethAddress: number): Promise<any> => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIweDU1MWZkMmM3" +
                   "YzdiZjM1NmJhYzE5NDU4N2RhYjJmY2Q0NjQyMDA1NGIiLCJwcm9qZWN0IjoiMHg0NjIyM2VkZDQxNTc2MzVkZmM2M" + 
                   "zk5MTU1NjA5ZjMwMWRlY2JmZDg4IiwiaWF0IjoxNzAwMDAyODkwfQ.IYZvBRuCiN0uYORKnVJ0SzT_1H_2o5xyDBG20VmnTQ0");
  const response = await fetch("https://api.buildcore.io/search/getManyAdvanced" + 
                         "?dataset=soon_snapshot&fieldName[]=ethAddress&fieldValue[]=" + ethAddress + "&operator[]===", 
                         {
                          method: 'GET',
                          headers: myHeaders,
                          redirect: 'follow'
                        });
  const obj = await response.json();
  return !!obj?.[0]?.ethAddressVerified;
};