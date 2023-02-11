let anchorEle=document.getElementById("hybridfarming-span1");
let paraEle=document.getElementById("hybridfarming-para1");
anchorEle.addEventListener("click",function(){
    if (anchorEle.textContent===" read more..")
    {
        paraEle.textContent="Full Harvest helps growers get the most out of a harvest and food companies save money by bringing farm excess to market. We are a B2B platform connecting large farms to food businesses to sell significantly discounted, yet perfectly good surplus and imperfectly shaped produce that would have otherwise gone to waste.Approx. 20 billion pounds ofproduce go to waste in the U.S. annually simply because they are not perfectly shaped for strict retailer standards. We aim to solve this problem by creating a marketplace for this unutilized edible and delicious produce.Our vision is three-fold: bring an additional revenue stream to farmers, lower the cost of healthy food production, while significantly reducing wasted food and resources. A win-win for everyone.";
        anchorEle.textContent=" read less";
        paraEle.appendChild(anchorEle);
    }
    else if(anchorEle.textContent===" read less"){
        paraEle.textContent="Full Harvest helps growers get the most out of a harvest and food companies save money by bringing farm excess to market. We are a B2B platform connecting large farms to food businesses to sell significantly discounted, yet perfectly good surplus and imperfectly shaped produce that would have otherwise gone to waste";
        anchorEle.textContent=" read more..";
        paraEle.appendChild(anchorEle);
    }
});
let anchorEle2=document.getElementById("hybridfarming-span2");
let paraEle2=document.getElementById("hybridfarming-para2");
anchorEle2.addEventListener("click",function(){
    if (anchorEle2.textContent===" read more..")
    {
        paraEle2.textContent="Full Harvest helps growers get the most out of a harvest and food companies save money by bringing farm excess to market. We are a B2B platform connecting large farms to food businesses to sell significantly discounted, yet perfectly good surplus and imperfectly shaped produce that would have otherwise gone to waste.Approx. 20 billion pounds ofproduce go to waste in the U.S. annually simply because they are not perfectly shaped for strict retailer standards. We aim to solve this problem by creating a marketplace for this unutilized edible and delicious produce.Our vision is three-fold: bring an additional revenue stream to farmers, lower the cost of healthy food production, while significantly reducing wasted food and resources. A win-win for everyone.";
        anchorEle2.textContent=" read less";
        paraEle2.appendChild(anchorEle2);
    }
    else if(anchorEle2.textContent===" read less"){
        paraEle2.textContent="Full Harvest helps growers get the most out of a harvest and food companies save money by bringing farm excess to market. We are a B2B platform connecting large farms to food businesses to sell significantly discounted, yet perfectly good surplus and imperfectly shaped produce that would have otherwise gone to waste";
        anchorEle2.textContent=" read more..";
        paraEle2.appendChild(anchorEle2);
    }
});