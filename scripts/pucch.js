var nRbSc = 12;

function getMPucchF1(c, n1_PUCCH, deltaPucchShift, nRBcqi, nCSan)
{
  if (c != 2 && c != 3)
  {
    throw "Invalid value of c. c value range: 3 - normal CP, 2 - extended CP"
  }
  if (n1_PUCCH < c * nCSan / deltaPucchShift)
  {
    return nRBcqi;
  }
  else
  {
    return Math.floor((n1_PUCCH - c * nCSan / deltaPucchShift)/
                      (nRbSc * c / deltaPucchShift)) +
           nRBcqi + Math.ceil(nCSan / 8);
  }
}

function getPucchPrbIndex(m, nrOfPrbs, nSlot)
{
  var nPrb;
  if ((m + (nSlot % 2)) % 2 == 0)
  {
    nPrb =  Math.floor(m/2);
  }
  else
  {
    nPrb = nrOfPrbs - 1 - Math.floor(m/2);
  }
 
  if (nPrb >= nrOfPrbs || nPrb < 0)
  {
    throw "Calculated PRB is outside cell bandwidth"
  }
 
  return nPrb
}

function getSrPrbIndex(c, srConfigIndex, deltaPucchShift, nRBcqi, nCSan, nrOfPrbs, nSlot)
{
  var mPucch = getMPucchF1(c, srConfigIndex, deltaPucchShift, nRBcqi, nCSan);
  return getPucchPrbIndex(mPucch, nrOfPrbs, nSlot);
}