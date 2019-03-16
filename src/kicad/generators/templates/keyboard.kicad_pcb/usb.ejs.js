module.exports = `(module keyboard_parts:USB_miniB_hirose_5S8 (layer B.Cu) (tedit 5950B1FC) (tstamp <%= data.tstamp %>)
    (at <%= data.x %> <%= data.y %> <%= data.rotation %>)
    (descr "USB miniB hirose UX60SC-MB-5S8")
    (tags "USB miniB hirose through hole UX60SC-MB-5S8")
    (path /5C81F3FF)
    (fp_text reference <%= data.name %> (at 0 -2.45 <%= data.rotation %>) (layer B.SilkS) hide
      (effects (font (size 0.8128 0.8128) (thickness 0.2032)) (justify mirror))
    )
    (fp_text value USB_mini_micro_B (at 0 -7.95 <%= data.rotation %>) (layer Dwgs.User) hide
      (effects (font (size 1.524 1.524) (thickness 0.3048)))
    )
    (fp_line (start 3.85 0.4) (end 3.85 -6.1) (layer B.SilkS) (width 0.2))
    (fp_line (start -3.85 0.4) (end -3.85 -6.1) (layer B.SilkS) (width 0.2))
    (fp_line (start -3.85 0.4) (end 3.85 0.4) (layer B.SilkS) (width 0.2))
    (fp_line (start -1 -6.1) (end 1 -6.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start -3.85 -6.6) (end -3.85 -5.7) (layer Dwgs.User) (width 0.2))
    (fp_line (start 3.85 -6.6) (end 3.85 -5.7) (layer Dwgs.User) (width 0.2))
    (fp_text user "PCB edge" (at -0.05 -5.35) (layer Dwgs.User) hide
      (effects (font (size 0.5 0.5) (thickness 0.125)))
    )
    (fp_line (start -3.85 -6.6) (end 3.85 -6.6) (layer Dwgs.User) (width 0.2))
    (pad 6 smd rect (at 2.675 -5.2 <%= data.rotation %>) (size 2.35 0.8) (layers B.Cu B.Paste B.Mask)
      (net 1 GND))
    (pad 6 smd rect (at -2.675 -5.2 <%= data.rotation %>) (size 2.35 0.8) (layers B.Cu B.Paste B.Mask)
      (net 1 GND))
    (pad 1 smd rect (at -1.6 0 <%= data.rotation %>) (size 0.5 1.4) (layers B.Cu B.Paste B.Mask)
      (net 2 VCC))
    (pad 2 smd rect (at -0.8 0 <%= data.rotation %>) (size 0.5 1.4) (layers B.Cu B.Paste B.Mask)
      <%- data.netForPad(2) %>)
    (pad 3 smd rect (at 0 0 <%= data.rotation %>) (size 0.5 1.4) (layers B.Cu B.Paste B.Mask)
      <%- data.netForPad(3) %>)
    (pad 4 smd rect (at 0.8 0 <%= data.rotation %>) (size 0.5 1.4) (layers B.Cu B.Paste B.Mask)
      <%- data.netForPad(4) %>)
    (pad 5 smd rect (at 1.6 0 <%= data.rotation %>) (size 0.5 1.4) (layers B.Cu B.Paste B.Mask)
      (net 1 GND))
    (pad 6 thru_hole oval (at -3.65 -2.4 <%= data.rotation %>) (size 1.5 4) (drill oval 0.7 3.2) (layers *.Cu *.Mask B.Paste)
      (net 1 GND))
    (pad 6 thru_hole oval (at 3.65 -2.4 <%= data.rotation %>) (size 1.5 4) (drill oval 0.7 3.2) (layers *.Cu *.Mask B.Paste)
      (net 1 GND))
  )
`;