//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApiComponents.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ImageFile
    {
        public int EntryID { get; set; }
        public int PlaceID { get; set; }
        public string ImageSource { get; set; }
    
        public virtual Tourism Tourism { get; set; }
    }
}
