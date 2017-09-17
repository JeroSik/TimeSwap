/* content.js
var PTZ = ;//Page Time Zone
var UTZ = ;//User-defined Time Zone
#const ZONECODES = [];//hard code these later.
#var page = ;//this is the current web page url
#var[] possibleCodes;
*/
var timezones = {};
timezones.ACDT = "+10:30";
timezones.ACST = "+09:30";
timezones.ACT = "-05:00";
timezones.ACWST = "+08:45";
timezones.ADT = "-03:00";
timezones.AEDT = "+11:00";
timezones.AEST = "+10:00";
timezones.AFT = "+04:30";
timezones.AKDT = "-08:00";
timezones.AKST = "-09:00";
timezones.AMST = "-03:00";
timezones.AMT = "-04:00";
timezones.ART = "-03:00";
timezones.AST = "-04:00";
timezones.AWST = "+08:00";
timezones.AZOST = "+00:00";
timezones.AZOT = "-01:00";
timezones.AZT = "+04:00";
timezones.BDT = "+08:00";
timezones.BIOT = "+06:00";
timezones.BIT = "-12:00";
timezones.BOT = "-04:00";
timezones.BRST = "-02:00";
timezones.BRT = "-03:00";
timezones.BST = "+01:00";
timezones.BTT = "+06:00";
timezones.CAT = "+02:00";
timezones.CCT = "+06:30";
timezones.CDT = "-05:00";
timezones.CEST = "+02:00";
timezones.CET = "+01:00";
timezones.CHADT = "+13:45";
timezones.CHAST = "+12:45";
timezones.CHOT = "+08:00";
timezones.CHOST = "+09:00";
timezones.CHUT = "+10:00";
timezones.CIST = "-08:00";
timezones.CIT = "+08:00";
timezones.CKT = "-10:00";
timezones.CLST = "-03:00";
timezones.CLT = "-04:00";
timezones.COST = "-04:00";
timezones.COT = "-05:00";
timezones.CST = "-06:00";
timezones.ACST = "+09:30";
timezones.ACDT = "+10:30";
timezones.CST = "-05:00";
timezones.CT = "+08:00";
timezones.CVT = "-01:00";
timezones.CWST = "+08:45";
timezones.CXT = "+07:00";
timezones.DAVT = "+07:00";
timezones.DDUT = "+10:00";
timezones.DFT = "+01:00";
timezones.EASST = "-05:00";
timezones.EAST = "-06:00";
timezones.EAT = "+03:00";
timezones.ECT = "-04:00";
timezones.EDT = "-04:00";
timezones.AEDT = "+11:00";
timezones.EEST = "+03:00";
timezones.EET = "+02:00";
timezones.EGST = "0:00";
timezones.EIT = "+09:00";
timezones.EST = "-05:00";
timezones.AEST = "+10:00";
timezones.FET = "+03:00";
timezones.FJT = "+12:00";
timezones.FKST = "-03:00";
timezones.FKT = "-04:00";
timezones.FNT = "-02:00";
timezones.GALT = "-06:00";
timezones.GAMT = "-09:00";
timezones.GET = "+04:00";
timezones.GFT = "-03:00";
timezones.GILT = "+12:00";
timezones.GIT = "-09:00";
timezones.GMT = "00:00";
timezones.GST = "-02:00";
timezones.GYT = "-04:00";
timezones.HDT = "-09:00";
timezones.HAEC = "+02:00";
timezones.HST = "-10:00";
timezones.HKT = "+08:00";
timezones.HMT = "+05:00";
timezones.HOVST = "+08:00";
timezones.HOVT = "+07:00";
timezones.ICT = "+07:00";
timezones.IDT = "+03:00";
timezones.IOT = "+03:00";
timezones.IRDT = "+4:30";
timezones.IRKT = "+08:00";
timezones.IRST = "+03:30";
timezones.IST = "+05:30";
timezones.JST = "+09:00";
timezones.KGT = "+06:00";
timezones.KOST = "+11:00";
timezones.KRAT = "+07:00";
timezones.KST = "+09:00";
timezones.LINT = "+14:00";
timezones.MAGT = "+12:00";
timezones.MART = "-09:30";
timezones.MAWT = "+05:00";
timezones.MDT = "-06:00";
timezones.MET = "+01:00";
timezones.MEST = "+02:00";
timezones.MHT = "+12:00";
timezones.MIST = "+11:00";
timezones.MIT = "-09:30";
timezones.MMT = "+06:30";
timezones.MSK = "+03:00";
timezones.MST = "-07:00";
timezones.MUT = "+04:00";
timezones.MVT = "+05:00";
timezones.MYT = "+08:00";
timezones.NCT = "+11:00";
timezones.NDT = "-02:30";
timezones.NFT = "+11:00";
timezones.NPT = "+05:45";
timezones.NST = "-03:30";
timezones.NT = "-03:30";
timezones.NUT = "-11:00";
timezones.NZDT = "+13:00";
timezones.NZST = "+12:00";
timezones.OMST ="+06:00";
timezones.ORAT ="+05:00";
timezones.PDT ="-07:00";
timezones.PET ="-05:00";
timezones.PETT ="+12:00";
timezones.PGT ="+10:00";
timezones.PHOT ="+13:00";
timezones.PHT ="+08:00";
timezones.PKT ="+05:00";
timezones.PMDT ="-02:00";
timezones.PMST ="-03:00";
timezones.PONT ="+11:00";
timezones.PST ="-08:00";
timezones.PYST = "-03:00";
timezones.PYT = "-04:00";
timezones.RET = "+04:00";
timezones.ROTT = "-03:00";
timezones.SAKT = "+11:00";
timezones.SAMT = "+04:00";
timezones.SAST = "+02:00";
timezones.SBT = "+11:00";
timezones.SCT = "+04:00";
timezones.SDT = "-10:00";
timezones.SGT = "+08:00";
timezones.SLST = "+05:30";
timezones.SRET = "+11:00";
timezones.SRT = "-03:00";
timezones.SST = "+08:00";
timezones.SYOT = "+03:00";
timezones.TAHT = "-10:00";
timezones.TFT = "+05:00";
timezones.TJT = "+05:00";
timezones.TKT = "+13:00";
timezones.TLT = "+09:00";
timezones.TMT = "+05:00";
timezones.TRT = "+03:00";
timezones.TOT = "+13:00";
timezones.TVT = "+12:00";
timezones.ULAST = "+09:00";
timezones.ULAT = "+08:00";
timezones.USZ1 = "+02:00";
timezones.UTC = "00:00";
timezones.UYST = "-02:00";
timezones.UYT = "-03:00";
timezones.UZT = "+05:00";
timezones.VET = "-04:00";
timezones.VLAT = "+10:00";
timezones.VOLT = "+04:00";
timezones.VOST = "+06:00";
timezones.VUT = "+11:00";
timezones.WAKT = "+12:00";
timezones.WAST = "+02:00";
timezones.WAT = "+01:00";
timezones.WEST = "+01:00";
timezones.WET = "00:00";
timezones.WIT = "+07:00";
timezones.WST = "+08:00";
timezones.YAKT = "+09:00";
timezones.YEKT = "+05:00";


var str = document.getElementsByTagName('html')[0].outerHTML;
var index=0;
var indexSpace=0;
var arrayIndex=0;

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

//get possible codes from the html page string
while((var temp="") != "</html>"){
  indexSpace = str.indexOf(" ",index);
  temp=str.substr(index,indexSpace);
  if(temp>=3&&temp<=5){
    for(key in timezones){
      if(temp == key){
        for(var k=4; k<=7;k++){
          if(index==0||((index-k==" ")&&((index-(k-1)==isLetter(str.charAt(index-(k+1))))&&(index-(k+1)==Number.isInteger(str.charAt(index-(k-1)))))))){
            if(index==0){continue;}
            else{str.replace(str.substr(index,indexSpace),correctTime);}
          }
        }
      }
    }
  }
  index=indexSpace+1;
}
//compares possible codes with list of codes
/*
const ZONECODES = [];//hard code these later.
var[] codes;
var codeIndex=0;
for(int i=0; i<possibleCodes.length; i++){
  for(int j=0; j<ZONECODES.length; j++){
    if(possibleCodes[i]==ZONECODES[J]){codes[codeIndex]=possibleCodes[i];codeIndex++}
  }
var res = str.replace(PTZ, UTZ);
}
*/
