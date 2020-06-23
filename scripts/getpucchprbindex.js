function getPucchPrbIndex(m, nrOfPrbs, nSlot)
{
  var nPrb;
  if (m % 2 == 0)
  {
    if (nSlot % 2 == 0)
    {
      nPrb =  Math.floor(m/2);
    }
    else
    {
      nPrb = nrOfPrbs - 1 - Math.floor(m/2);
    }
  }
  else
  {
    if (nSlot % 2 == 0)
    {
      nPrb = nrOfPrbs - 1 - Math.floor(m/2);
    }
    else
    {
      nPrb =  Math.floor(m/2);
    }
  }
 
  if (nPrb >= nrOfPrbs || nPrb < 0)
  {
    throw "Calculated PRB is outside cell bandwidth"
  }
 
  return nPrb
}